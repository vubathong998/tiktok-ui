import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classnames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>side bar love u</h2>
        </aside>
    );
}

export default Sidebar;
