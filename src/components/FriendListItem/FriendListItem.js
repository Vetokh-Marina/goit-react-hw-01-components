import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

function FriendListItem({status,avatar,name }) {
    return (
        <>
            <span className={s.status}style={{ backgroundColor: status ? 'green' : 'red' }}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </>
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};