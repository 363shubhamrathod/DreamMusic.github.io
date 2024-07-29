

import Logo from './LeftPanel/Logo';
import Menu from './LeftPanel/Menu';
import Discover from './LeftPanel/Discover';
import YourCollection from './LeftPanel/YourCollections';
import General from './LeftPanel/General';


export default function LeftPanel(){
    return (
        <div className="left-panel">
            <Logo/>
            <Menu/>
            <Discover/>
            <YourCollection/>
            <General/>
        </div>
    );
}