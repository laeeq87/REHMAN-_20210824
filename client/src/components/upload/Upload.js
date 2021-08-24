import React from 'react'
import { Form, Button , Row } from "react-bootstrap";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import Alert from 'react-bootstrap/Alert'



const initialState = {
  title: '',
  category: '',
  uploadPercentage: 0,
  selectedFile: null
};


class Upload extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
          categories: [],
          title: '',
          category: '',
          uploadPercentage: 0,
          selectedFile: null,
          showAlert: false,
          alertMessage: '',
       };
    }


  async componentDidMount(prevProps) {
      await this.getCategories();
  }

  getCategories = async ()=> {
      try {
          const response = await axios.get('http://localhost:5000/api/category');
          if (response.status === 200 & response.data.data.length > 0) {
              this.setState({categories: response.data.data});
          }
      } catch (error) {
          console.error(error);
      }
  }

  handleSubmit = (event) =>  {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  categorySelect = () => {
      this.state.categories.map((e, key) => {
      return <option key={key} value={e.id}>{e.title}</option>;
      })
    }


   onChangeHandler = async event => {
    this.setState({selectedFile : event.target.files[0]});
 }

  onUploadClickHandler = async () =>  {

    let data = new FormData();
    data.append('video', this.state.selectedFile);
    data.append('title', this.state.title);
    data.append('category', this.state.category);


    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        let percent = Math.floor((loaded * 100) / total )

        if (percent < 100) {
          this.setState({uploadPercentage : percent})
        }
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/video/upload', data, options)
      .catch(err => {
        console.log('Error ==>');
      })

      this.setState({uploadPercentage : 100}, () => {
        setTimeout(()=> {
          this.setState({uploadPercentage: 0})
        }, 1000);
      })

      if (response.status === 200 & response.data.code !== 201) {
        this.setState(prevState => ({
          showAlert: true,
          alertMessage: response.data.message,
          initialState
        }));

      }
    } catch (error) {
        console.error(error);
    }
 }

 selectFunction() {
  let data = [<option value={0}>Choose...</option>];
  this.state.categories.map((e, key) => {
  data.push(<option key={key} value={e.id}>{e.title}</option>);
});
return data
}

  render() {
    const { uploadPercentage } = this.state;
  return(
      <div className="mt-5">
      <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3 col-md-6" controlId="videoTitle">
              <Form.Label >Video Title:</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" value={this.state.title} onChange={(event)=> {this.setState({title: event.target.value})}}/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group className="mb-3 col-md-6" controlId="formGridPassword">
              <Form.Label>Category:</Form.Label>
                <Form.Select onChange={(event)=> {this.setState({category: event.target.value})}}>
                  {this.selectFunction()}
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group className="mb-3 col-md-6" controlId="formGridAddress1">
            <Form.Label>Upload Video File:</Form.Label>
            <Form.Control type="file" name="video" onChange={this.onChangeHandler}/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
          { uploadPercentage > 0 && <ProgressBar now={uploadPercentage}  active label={`${uploadPercentage}%`} />}
          </Row>

          {/* {this.state.showAlert === true ? <Alert variant={"danger"} >{this.state.alertMessage}</Alert> : ''} */}

          <Button variant="primary" onClick={this.onUploadClickHandler}>
            Upload
          </Button>
       </Form>
      </div>
    );
  }
  }
  export default Upload;