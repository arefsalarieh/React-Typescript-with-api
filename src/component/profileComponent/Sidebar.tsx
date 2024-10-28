import { NavLink } from 'react-router-dom';
import prof from '../../assets/images/prof.png'

const Sidebar = () => {
  return (
    <div>
        <img src={prof} alt="" className='mx-auto'/>
      <div className="join join-vertical w-full mt-10">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium text-white">user pannel</div>
          <div className="collapse-content flex flex-col">
            <NavLink to='/ProfileLayout'>Dashboard</NavLink>
            <NavLink to='/ProfileLayout/FavoriteCourses'>FavoriteCourses</NavLink>            
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-white">admin pannel</div>
          <div className="collapse-content">
            <NavLink to='/ProfileLayout/CreateCourse'>CreateCourse</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
