import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}>
        {/* {isOnline ? 'online' : 'offline'} */}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
