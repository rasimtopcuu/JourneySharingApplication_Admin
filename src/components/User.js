
/* 
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
*/
import React, { Component } from 'react';
import Navbar from "./Navbar";

class User extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <br></br>
            
            <div className="container-fluid">




<div className="card shadow mb-4">
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Kullanıcılar</h6>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Yaş</th>
            <th>E-mail</th>
            <th>Cep telefonu</th>
            <th>Yolculuk Sayısı</th>
            <th>Kazanılan toplam ücret ₺</th>
           
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Yaş</th>
            <th>E-mail</th>
            <th>Cep telefonu</th>
            <th>Yolculuk Sayısı</th>
            <th>Kazanılan toplam ücret ₺</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Remzi</td>
            <td>Çakır</td>
            <td>21</td>
            <td>remzicakir@gmail.com</td>
            <td>0531 823 93 43</td>
            <td>12</td>
            <td>321</td>
          </tr>
          <tr>
            <td>Remzi</td>
            <td>Çakır</td>
            <td>21</td>
            <td>remzicakir@gmail.com</td>
            <td>0531 823 93 43</td>
            <td>12</td>
            <td>321</td>
          </tr> <tr>
            <td>Remzi</td>
            <td>Çakır</td>
            <td>21</td>
            <td>remzicakir@gmail.com</td>
            <td>0531 823 93 43</td>
            <td>12</td>
            <td>321</td>
          </tr> <tr>
            <td>Remzi</td>
            <td>Çakır</td>
            <td>21</td>
            <td>remzicakir@gmail.com</td>
            <td>0531 823 93 43</td>
            <td>12</td>
            <td>321</td>
          </tr> <tr>
            <td>Remzi</td>
            <td>Çakır</td>
            <td>21</td>
            <td>remzicakir@gmail.com</td>
            <td>0531 823 93 43</td>
            <td>12</td>
            <td>321</td>
          </tr>



          
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>

        </div>
      
    );
  }
}

export default User;