import { useNavigate } from 'react-router-dom';
import { HomeIcon, LibraryIcon, SearchIcon } from '../../../Icons';

// I18n
import { useTranslation } from 'react-i18next';

// Redux
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../../store/slices/ui';

export const MobileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [t] = useTranslation(['playingBar']);

  return (
    <footer className='mobile-menu'>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        <HomeIcon />
        <p>{t('Home')}</p>
      </button>
      <a href='https://github.com/francoborrelli/portfolio' target='_blank' rel='noreferrer'>
        <SearchIcon />
        <p>{t('Source code')}</p>
      </a>
      <button onClick={() => dispatch(uiActions.toggleLibrary())}>
        <LibraryIcon />
        <p>{t('Your Library')}</p>
      </button>
    </footer>
  );
};
