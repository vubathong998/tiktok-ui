import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://phunugioi.com/wp-content/uploads/2020/11/hinh-ve-cute-don-gian-nhat-600x600.jpg"
                className={cx('avatar')}
                alt="love you"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phạm Thị Thanh Kim Huệ</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phamthikimhue</span>
            </div>
        </div>
    );
}

export default AcountItem;
