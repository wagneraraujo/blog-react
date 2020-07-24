import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      imagem: "",
      descricao: "",
      alert: '',
      progress: 0
    };

    this.cadastrar = this.cadastrar.bind(this);
this.handleFile = this.handleFile.bind(this);
this.handleuploud = this.handleuploud.bind(this)
  }
  componentDidMount() {
    if (!firebase.getCurrent()) {
      this.props.history.replace("/login");
      return null;
    }
}


cadastrar = async(e) =>{
    e.preventDefault();
    if (
      this.state.titulo !== "" &&
      this.state.imagem !== "" &&
      this.state.descricao !== ""  &&
      this.state.imagem !== null && this.state.url !== ''
    ) {
      let posts = firebase.app.ref("post");
let chave = posts.push().key;

await posts.child(chave).set({
titulo: this.state.titulo,
imagem: this.state.url,
descricao: this.state.descricao
})

this.props.history.push('/dashboard')
}else{
this.setState({alert: 'Campos vazios, não pode nenino :)'})
}


  }
handleFile = async(e) =>{
const image = e.target.files[0]
if(image.type === 'image/png' || image.type ===  'image/jpeg'){
await this.setState({imagem:image})
this.handleuploud()
}else{
alert('envie imagens jpg ou png')
this.setState({imagem:null})
return null
}
}


handleuploud = async () =>{
  const { imagem } = this.state;
  const currentUid = firebase.getCurrentUid()

  const uploudTaks = firebase.storage.ref(`images/${currentUid}/${imagem.name}`).put(imagem)

  await uploudTaks.on('state_changed', (snapshot)=>{
    //progresso
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
  this.setState({progress})    

  },
  (error) => {
    //erro
  },

  ()=>{
    //deu certo :)
    firebase.storage.ref(`images/${currentUid}`)
    .child(imagem.name).getDownloadURL()
    .then(url => {
      this.setState({url: url});
    })
  }
  
  
  )
}
  render() {
    return (
      <div>
        <header>
          <span>{this.state.alert}</span>
          <Link to="/dashboard">Voltar</Link>
        </header>
        <h3>Novo post</h3>

        <form onSubmit={this.cadastrar}>
          <div>
            <label htmlFor="">titulo</label>
            <input
              id=""
              type="text"
              name=""
              placeholder="Titulo aqui"
              value={this.state.titulo}
              onChange={(e) => this.setState({ titulo: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Url da imagem</label>
            <input
              id=""
              type="file"
              name=""
              onChange={this.handleFile}
              
            />
            {this.state.url !== ''? <img src={this.state.url} alt={this.state.titulo} height="100" />:<progress value={this.state.progress} max="100" />}
          </div>
          <div>
            <label htmlFor="">Descrição</label>
            <textarea
              id=""
              type="text"
              name=""
              placeholder="Escreva uma descrição"
              value={this.state.descricao}
              onChange={(e) => this.setState({ descricao: e.target.value })}
            />
          </div>

          <button type="submit">Criar post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(New);
