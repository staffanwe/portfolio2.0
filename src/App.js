import React from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import About from './components/About/About';
import { Scroll } from 'react-fns';
import { WindowSize } from 'react-fns';
import NavBar from './components/NavBar/NavBar';

function App() {
    function Hello(props) {
        if (props.y / props.height > 0.58) {
            return <NavBar />;
        } else {
            return <div></div>;
        }
    }
    return (
        <div>
            <Scroll
                render={({ x, y }) => (
                    <div>
                        <WindowSize
                            render={({ width, height }) => (
                                <div className="fixed">
                                    <Hello y={y} height={height} />
                                </div>
                            )}
                        />
                    </div>
                )}
            />
            <Landingpage />
            <About />
        </div>
    );
}

export default App;