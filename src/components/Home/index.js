import React, { Component } from 'react';
import firebase from '../../firebase';

class Home extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		firebase.app.ref('post').on('value', (snapshot) => {
			let state = this.state;
			state.posts = [];
			snapshot.forEach((childItem) => {
				state.posts.push({
					key: childItem.key,
          titulo: childItem.val().titulo,
          imagem: childItem.val().imagem,
          descricao: childItem.val().descricao,
          
				});
			});
      this.setState(state);
	
    });
    
	}

	render() {
		return (
			<section id="post">
				{this.state.posts.map((post) => {
					return (
						<article key={post.key}>
							<header>
								<div className="title">
            <strong>{post.titulo}</strong>
								</div>
                <img src={post.imagem} alt="Logo" />
							</header>
							
              
							<footer>
								<p>{post.descricao}</p>
							</footer>
              
						</article>
					);
				})}
			</section>
		);
	}
}

export default Home;
