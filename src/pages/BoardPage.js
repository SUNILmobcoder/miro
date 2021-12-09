import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import Buttons from '../components/Buttons';
import { InputField } from '../components/Forms';

const STATUS = ['', 'To Do', 'In Progress', 'On Hold', 'Completed', 'Released'];

const DATA = [
  { type: 1, content: 'hello 1' },
  { type: 2, content: 'hello 2' },
  { type: 3, content: 'hello 3' },
  { type: 4, content: 'hello 4' },
  { type: 5, content: 'hello 5' },
];

const BoardPage = () => {
  const [boxName, setBoxName] = useState('');
  const [addTask, setAddTask] = useState('');
  const [data, setData] = useState(DATA);
  const [Modal, open, close] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const handleCreateBox = () => {
    close();
    console.log(addTask, 'sdfghjkl;');
    setData((prev) => [...prev, { type: addTask, content: boxName }]);
  };
  const handleBoxNameChange = (e) => {
    setBoxName(e.target.value);
  };
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
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
                Create new task
              </h1>
              <InputField value={boxName} onChange={handleBoxNameChange} />
              <div>
                <Buttons onClick={close} label="CLOSE" />
                <Buttons onClick={handleCreateBox} label="Create" />
              </div>
            </div>
          </Modal>
        </div>
        {[1, 2, 3, 4, 5].map((items) => {
          return (
            <div
              style={{
                width: '300px',
                margin: '20px',
              }}
              key={`${items}`}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {STATUS[items]}
                </div>
                {data
                  .filter((i) => i.type === items)
                  .map((item) => {
                    return (
                      <div
                        style={{
                          border: '1px solid black',
                          display: 'flex',
                          justifyContent: 'center',
                          margin: '5px',
                        }}
                      >
                        {item.content}
                      </div>
                    );
                  })}
                <div
                  style={{
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '5px',
                  }}
                  onClick={() => {
                    open();
                    setAddTask(items);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardPage;
