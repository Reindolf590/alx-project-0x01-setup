import { UserProps } from "@/interfaces";

const UserCard: React.FC<{user: UserProps}> = ({ user }) => {
   return (
    <div style={styles.card}>
      <h2>{user.name} ({user.username})</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
    backgroundColor: '#f9f9f9',
  }
};

export default UserCard;