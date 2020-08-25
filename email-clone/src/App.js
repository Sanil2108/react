import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from './components/Box';
import DraggableBox from './components/DraggableBox';
import EmailListItem from './components/EmailListItem';
import DraggableEmailListItem from './components/DraggableEmailListItem';
import EmailList from './components/EmailList';

function App() {
    return <div>
        <Box text="This is a box"></Box>
        <DraggableBox text="This is a draggable box"></DraggableBox>
        <DraggableEmailListItem
            emailData={{
                sender: 'sanilkhurana7@gmail.com',
                title: 'Some title',
                time: '12:47 PM'
            }}
        ></DraggableEmailListItem>
        <EmailList
            emailObjects={[
                { sender: 'Sanil', title: 'Some work', time: '7AM' },
                { title: 'Some wor2k', time: '7AsM' },
                { sender: 'Kabcd', title: 'Some w21ork', time: '7AaM' },
            ]}
        >
        </EmailList>
    </div>
}

export default App;
