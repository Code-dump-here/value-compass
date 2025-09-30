import Header from '../components/Header';
import ValueQuiz from '../components/ValueQuiz';

export default function Quiz() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <Header />
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '2rem 1rem' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1e3a8a',
            marginBottom: '1rem'
          }}>
            Bài trắc nghiệm Giá trị
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Khám phá các yếu tố xã hội đang định hình giá trị cá nhân của bạn thông qua 
            các câu hỏi về thói quen, quan điểm và lựa chọn hàng ngày.
          </p>
        </div>
        <ValueQuiz />
      </div>
    </div>
  );
}
