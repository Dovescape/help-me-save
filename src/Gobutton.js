import React from 'react';
import Modal from 'react-awesome-modal';
import './Gobutton.css';

class Gobutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false
    }
}

  openModal() {
      this.setState({
        visible : true
      });
  }

  closeModal() {
      this.setState({
        visible : false
      });
  } 

  render() {
    return (
      <section>
        <input type="button" value="Go!" onClick={() => this.openModal()} />
        <Modal 
            visible={this.state.visible}
            width="800"
            height="700"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}>
            <div className="form-container">
                <h1>Input a percentage of your monthly income you'd like to save</h1>
                <form className="inputs">
                  <fieldset>
                    <p>
                      <label>Travel: </label>
                      <input type="number"></input>
                    </p>
                    <p>
                      <label>Car: </label>
                      <input type="number"></input>
                    </p>
                    <p>
                      <label>House: </label>
                      <input type="number"></input>
                    </p>
                  </fieldset>
                  <p>
                    <button href="javascript:void(0);" onClick={() => this.closeModal()}>Close</button>
                  </p>
                </form>
            </div>
        </Modal>
      </section>
    );
  }
}

export default Gobutton;