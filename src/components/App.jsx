import React, { Component } from 'react';
import styles from '../styles/app.module.scss';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.handleScrollUp = this.handleScrollUp.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  handleScrollUp() {
    window.scroll(0, 0);
}

  render() {
    return (
      <div>
        <Header></Header>
        <div className={styles.itemsWrap}>
          <ul className={styles.items}>
            {
              this.props.items.map((item, index) => {
                return (
                  <li className={styles.item} key={item.groupId._id}>
                    <a href={`https://event.ddocdoc.com/curation/${item.groupId._id}`}>
                      <img src={item.mainImage.url} alt={item.title} />
                      <div className={styles.itemContext}>
                        <h2>{item.title}</h2>
                        <p><strong>기획전</strong><b> | </b>{item.groupId.description}</p>
                      </div>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <aside className={styles.scrollUp} onClick={() => {
          this.handleScrollUp();
        }}>
          <i className={styles.scrollUpIcon}>TOP</i>
        </aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App
