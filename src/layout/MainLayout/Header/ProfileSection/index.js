import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip } from '@mui/material';
import { IconArrowDown } from '@tabler/icons';

import User1 from 'assets/images/users/user-round.svg';

const ProfileSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {};

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer',
              backgroundColor: 'white'
            }}
          />
        }
        label={<IconArrowDown stroke={1.5} size="1.5rem" />}
        onClick={handleToggle}
      />
    </>
  );
};

export default ProfileSection;
