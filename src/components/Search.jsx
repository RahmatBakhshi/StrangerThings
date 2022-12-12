// import React, { useState } from 'react';


// // // a function that checks if a given post matches the search term entered by
// // the user

// function postMatches(post, text) {
//     return (
//       post.title.toLowerCase().includes(text.toLowerCase()) ||
//       post.description.toLowerCase().includes(text.toLowerCase())
//     );
//   }
// // our search form that will store the text entered
// class SearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ''
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const filteredPosts = this.props.posts.filter(post => postMatches(post, this.state.searchTerm));
//     this.props.setPosts(filteredPosts);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// }

// export default SearchForm;
