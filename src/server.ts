import Http from './http';
import './websocket/client';
import './websocket/admin';


Http.app.listen(3333, () => {
  console.log('🚀 Server is running on port 3333');
});