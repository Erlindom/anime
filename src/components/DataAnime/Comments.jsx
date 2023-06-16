import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3>Comentarios</h3>
      <form onSubmit={handleSubmit} className='form-comment'>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario"
        />
      </form>
      <div className='container_comment'>
        {comments.map((comment, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className='content_comments'>
                <img src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" alt="" className='comment_img'/>
                <p key={index}>{comment}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;