import React, { Component } from 'react';
import firebase from '../../firebase';
import {Section, Article, TitleArticle} from './styles.js'
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
			<Section>
				{this.state.posts.map((post) => {
					return (
						<Article key={post.key}>
							<header>
								<TitleArticle>
            <strong>{post.titulo}</strong>
								</TitleArticle>
                <img src={post.imagem} alt="Logo" />
							</header>
							
              
							<footer>
								<p>{post.descricao}</p>
							</footer>
              
						</Article>
					);
				})}
			</Section>
		);
	}
}

export default Home;
