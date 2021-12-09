import React, { useState } from 'react';
import Buttons from '../components/Buttons';

import 'reactjs-popup/dist/index.css';
import { useModal } from 'react-hooks-use-modal';
import { InputField } from '../components/Forms';
import { useNavigate } from 'react-router-dom';

const BOX = [
  { name: '1', color: '543' },
  { name: '2', color: '873' },
  { name: '3', color: '5aaa43' },
  { name: '4', color: '599943' },
];
const COLOR = ['123456', '162456', '12ff56', '1abc56', '1bca56', '12cba6'];

const MyBoard = () => {
  const navigate = useNavigate();
  const [boxName, setBoxName] = useState('');
  const [boxColor, setBoxColor] = useState('');
  const [boxList, setBoxList] = useState(BOX);
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  const handleCreateBoard = () => {
    open();
    console.log('hello');
  };
  const handleCreateBox = () => {
    close();
    setBoxList((prev) => [...prev, { name: boxName, color: boxColor }]);
  };
  const handleBoxNameChange = (e) => {
    setBoxName(e.target.value);
  };
  const handleNavigation = (data) => {
    console.log(data);
    navigate('/board');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <div>
          <div>
            <Modal>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: '400px',
                  backgroundColor: 'grey',
                }}
              >
                <h1
                  style={{
                    padding: '20px',
                    margin: '10px',
                  }}
                >
                  Create new box
                </h1>
                <InputField value={boxName} onChange={handleBoxNameChange} />
                <div>
                  Selected Color : {boxColor ? boxColor : 'not selected'}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {COLOR.map((item) => {
                    return (
                      <div
                        onClick={() => setBoxColor(item)}
                        key={item}
                        style={{
                          background: `#${item}`,
                          height: '20px',
                          width: '20px',
                          margin: '5px',
                        }}
                      />
                    );
                  })}
                </div>
                <div>
                  <Buttons onClick={close} label="CLOSE" />
                  <Buttons onClick={handleCreateBox} label="Create" />
                </div>
              </div>
            </Modal>
          </div>
          <Buttons onClick={handleCreateBoard} label="Create new board" />
        </div>
        <hr style={{ width: '80%' }} />
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {boxList.map((item) => {
              return (
                <div
                  key={item.name}
                  style={{
                    height: '200px',
                    width: '300px',
                    background: `#${item.color}`,
                    margin: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleNavigation(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
            <div
              style={{
                height: '200px',
                width: '300px',
                background: '#fff',
                margin: '10px',
                fontSize: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black',
              }}
              onClick={() => open()}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBoard;
