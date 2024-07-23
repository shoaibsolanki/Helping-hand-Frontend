import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaMoon, FaTint, FaPalette } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Setting = ({ show, darkMode, toggleDarkMode, handleClose }) => {
  const handleDarkModeToggle = () => {
    toggleDarkMode(); // Call toggleDarkMode function from props
  };

  return (
    <div className={`text-center mt-12 ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
      <Modal  show={show} onHide={handleClose} dialogClassName="bottom-modal" centered>
        <Modal.Header  className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'}`} closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'}`} >
          <ListGroup className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'}`} >
            <ListGroupItem className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'} d-flex justify-content-between items-center`}>
              <div className="d-flex items-center">
                <FaMoon className={`mr-2 ${darkMode ? 'text-yellow-300' : 'text-red-600'}`} />
                Dark Mode
              </div>
              <div>
                <label className="switch">
                  <input 
                    checked={darkMode}
                    onChange={handleDarkModeToggle}
                    type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </ListGroupItem>
            <ListGroupItem className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'} d-flex justify-content-between items-center`}>

              <div>
                <div className="d-flex items-center">
                  <FaTint className="text-green-600 mr-2" />
                  Page Highlight
                </div>
                <small className="text-gray-500">16 Colors Highlights Included</small>
              </div>
              <Button variant="danger" size="sm">
                HOT
              </Button>
            </ListGroupItem>
            <ListGroupItem className={` ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-gray-900' : 'bg-white'} d-flex justify-content-between items-center`}>

              <div>
                <div className="d-flex items-center">
                  <FaPalette className="text-blue-600 mr-2" />
                  Background Color
                </div>
                <small className="text-gray-500">10 Page Gradients Included</small>
              </div>
              <Button variant="danger" size="sm">
                NEW
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Setting;
