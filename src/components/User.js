import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";





class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://25.109.92.209:8081/user")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Not: Burada hataları yakalamak önemlidir.
            // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
            // bu blok içinde hatalar yakalanır.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.name}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          );
        }
      }
    }

export default User;    