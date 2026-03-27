import React from 'react';

interface ProfileCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, avatarUrl }) => {
  return (
    <div className="profile-card">
      {avatarUrl && <img src={avatarUrl} alt={`${name}'s avatar`} />}
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
