import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Panel , ButtonToolbar ,  DropdownButton , MenuItem , FormGroup , FormControl , InputGroup} from 'react-bootstrap';
import {Row , Col , Thumbnail , Grid ,Image , Button , Label} from 'react-bootstrap';

export default class ListOfUser extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            arrayOfUsers : [],
            userName : ""
        }
    }

    componentWillMount = () =>
    {
        
        // fetch('https://api.github.com/search/users?q=suhasmore' , {
        //     // mode: 'no-cors',
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //     },
        //     },
        //     ).then(response => {
        //     if (response.ok) {
        //         response.json().then(json => {
        //         console.log(json);
        //         });
        //     }
        //     });
        
       

        // console.log(this.state.arrayOfUsers.length);
    }
    searchUser = (e) =>
    {
        var un = document.getElementById('userName').value;
        console.log("in searchUser function" , un);
        // this.setState({userName : un});
        fetch('https://api.github.com/search/users?q='+ un , {
        // mode: 'no-cors',
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        },
        ).then(response => {
        if (response.ok) {
            response.json().then(json => {
                this.setState({arrayOfUsers : json.items})
            console.log(" = " , this.state.arrayOfUsers);
            });
        }
        });
    }
    getUser = (repos_url , e) =>
    {
        // console.log("getUser username = " , username);
        // var url = 'https​://api.github.com/users/'+username+'/repos';
        fetch(repos_url , {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            },
            ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    // this.setState({arrayOfUsers : json.items})
                console.log(" = " , json);
                });
            }
            });

    }
    render()
    {
        return(
            <div>
                
                
                <div>
                    <br/><br/>
                    <div className="col-md-12">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                <Row className="show-grid">
                                    <Col xs={6} md={4}>
                                    <ButtonToolbar>
                                    <   DropdownButton title="Search By Name" id="dropdown-size-medium">
                                        <MenuItem eventKey="1">Search By Name</MenuItem>
                                        <MenuItem eventKey="2">Search By Profession</MenuItem>
                                        <MenuItem eventKey="3">Search By Date 1</MenuItem>
                                        <MenuItem eventKey="4">Search By Date 1</MenuItem>
                                        </DropdownButton>
                                    </ButtonToolbar>
                                    </Col>
                                    <Col xs={6} md={4}>
                                    </Col>
                                    <Col xsHidden md={4}>
                                    <FormGroup>
                                        <InputGroup>
                                        <FormControl type="text" id = "userName"/>
                                        <InputGroup.Addon><Button bsStyle="link" onClick={this.searchUser.bind(this)}>Link</Button></InputGroup.Addon>
                                        </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                </Panel.Heading>
                                <Panel.Body>
                                <div className="col-md-12">
                                    <div className="col-md-2">
                                    </div>
                                    <div className="col-md-8">
                                    
                                    <Panel>
                                        <Panel.Body>
                                            {
                                                this.state.arrayOfUsers.map((user , key) =>
                                                <div key={key} className="col-md-12">
                                                        <div className="col-md-3">
                                                        <Thumbnail href="#" alt="171x180" src={user.avatar_url}  rounded/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            {/* <h5></h5>
                                                            <p>
                                                                Label
                                                            </p> */}
                                                            <h3 className="text-left">
                                                            {user.login}
                                                            </h3>
                                                            <br/>
                                                            <h5 className="text-left">
                                                            Your Profile : {user.url}
                                                            </h5>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <Button bsStyle="link" onClick={this.getUser.bind(this , user.repos_url)}>Link</Button>
                                                        </div>
                                                    </div>


                                                )
                                            }
                                        

                                        </Panel.Body>
                                    </Panel>
                                    </div>
                                    <div className="col-md-2">
                                    </div>
                                </div>
                                </Panel.Body>
                            </Panel>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
               
                    </div>
            </div>
        )
    }
}

