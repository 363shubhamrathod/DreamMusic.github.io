

import SearchBar from './TopBar/SearchBar';
import TopButton from './TopBar/TopButtons';


export default function TopBar(){
    return (
        <div className='center-panel-topbar'>
            <TopButton/>
            <SearchBar/>
        </div>
    );
}
