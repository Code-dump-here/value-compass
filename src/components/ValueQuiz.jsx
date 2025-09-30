import { useState } from 'react';

export default function ValueQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Điều gì thúc đẩy bạn tham gia hoạt động bảo vệ môi trường?',
      options: [
        { text: 'Thấy bạn bè cùng làm', value: 'social', influence: 'Tâm lý xã hội' },
        { text: 'Tin rằng điều đó đúng đắn', value: 'moral', influence: 'Hệ tư tưởng' },
        { text: 'Ảnh hưởng từ truyền thông', value: 'media', influence: 'Tồn tại xã hội' },
        { text: 'Xuất phát từ giáo dục gia đình', value: 'education', influence: 'Hệ tư tưởng' }
      ]
    },
    {
      id: 2,
      question: 'Khi lựa chọn nghề nghiệp, yếu tố nào quan trọng nhất?',
      options: [
        { text: 'Đam mê cá nhân', value: 'passion', influence: 'Tâm lý xã hội' },
        { text: 'Kỳ vọng của gia đình', value: 'family', influence: 'Hệ tư tưởng' },
        { text: 'Xu hướng xã hội', value: 'trend', influence: 'Tâm lý xã hội' },
        { text: 'Cơ hội tài chính', value: 'money', influence: 'Tồn tại xã hội' }
      ]
    },
    {
      id: 3,
      question: 'Bạn thường tìm kiếm thông tin từ đâu?',
      options: [
        { text: 'Mạng xã hội và bạn bè', value: 'social', influence: 'Tâm lý xã hội' },
        { text: 'Sách vở và nghiên cứu', value: 'research', influence: 'Hệ tư tưởng' },
        { text: 'Báo chí chính thống', value: 'news', influence: 'Tồn tại xã hội' },
        { text: 'Kinh nghiệm cá nhân', value: 'experience', influence: 'Tâm lý xã hội' }
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResults = () => {
    const influenceCount = {
      'Tồn tại xã hội': 0,
      'Tâm lý xã hội': 0,
      'Hệ tư tưởng': 0
    };

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      const option = question.options.find(opt => opt.value === answer.optionValue);
      influenceCount[option.influence]++;
    });

    return influenceCount;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const results = calculateResults();
    const mainInfluence = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);

    return (
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          color: '#1e3a8a',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Kết quả Phân tích Giá trị
        </h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Ảnh hưởng chính:</h3>
          <div style={{
            background: mainInfluence === 'Tồn tại xã hội' ? '#dbeafe' : 
                       mainInfluence === 'Tâm lý xã hội' ? '#dcfce7' : '#f3e8ff',
            padding: '1rem',
            borderRadius: '0.5rem',
            borderLeft: '4px solid ' + (
              mainInfluence === 'Tồn tại xã hội' ? '#3b82f6' : 
              mainInfluence === 'Tâm lý xã hội' ? '#10b981' : '#8b5cf6'
            )
          }}>
            <h4 style={{ 
              color: mainInfluence === 'Tồn tại xã hội' ? '#1e40af' : 
                     mainInfluence === 'Tâm lý xã hội' ? '#065f46' : '#5b21b6',
              marginBottom: '0.5rem'
            }}>
              {mainInfluence}
            </h4>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              {mainInfluence === 'Tồn tại xã hội' 
                ? 'Giá trị của bạn chịu ảnh hưởng mạnh từ điều kiện kinh tế, công nghệ và môi trường xung quanh.'
                : mainInfluence === 'Tâm lý xã hội'
                ? 'Giá trị của bạn hình thành chủ yếu từ cảm xúc, xu hướng và tâm lý xã hội.'
                : 'Giá trị của bạn được định hình bởi hệ thống giáo dục, văn hóa và tư tưởng.'
              }
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Phân tích chi tiết:</h3>
          {Object.entries(results).map(([influence, count]) => (
            <div key={influence} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem 0',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <span style={{ color: '#4b5563' }}>{influence}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '100px',
                  height: '8px',
                  background: '#e5e7eb',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: (count / questions.length * 100) + '%',
                    height: '100%',
                    background: influence === 'Tồn tại xã hội' ? '#3b82f6' : 
                               influence === 'Tâm lý xã hội' ? '#10b981' : '#8b5cf6',
                    transition: 'width 0.5s ease'
                  }}></div>
                </div>
                <span style={{ 
                  color: '#6b7280', 
                  fontSize: '0.9rem',
                  minWidth: '30px',
                  textAlign: 'right'
                }}>
                  {count}/{questions.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={resetQuiz}
          style={{
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            width: '100%',
            fontWeight: '500'
          }}
        >
          Làm lại bài trắc nghiệm
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div style={{
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        color: '#1e3a8a',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        Bài trắc nghiệm Giá trị
      </h2>
      
      <div style={{ 
        textAlign: 'center', 
        color: '#6b7280',
        marginBottom: '2rem'
      }}>
        Câu {currentQuestion + 1} / {questions.length}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem',
          color: '#374151',
          marginBottom: '1.5rem',
          lineHeight: '1.4'
        }}>
          {currentQ.question}
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer({
                questionId: currentQ.id,
                optionValue: option.value,
                influence: option.influence
              })}
              style={{
                background: 'white',
                border: '2px solid #e5e7eb',
                padding: '1rem 1.25rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1rem',
                color: '#374151',
                transition: 'all 0.2s ease',
                fontWeight: '500'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#f8fafc';
                e.target.style.borderColor = '#3b82f6';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'white';
                e.target.style.borderColor = '#e5e7eb';
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: '#f0f9ff',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #bae6fd'
      }}>
        <p style={{ 
          color: '#0369a1', 
          fontSize: '0.85rem', 
          margin: 0,
          textAlign: 'center'
        }}>
          💡 Bài trắc nghiệm giúp bạn hiểu rõ hơn về các yếu tố xã hội đang định hình giá trị cá nhân
        </p>
      </div>
    </div>
  );
}
