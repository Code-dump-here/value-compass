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
    },
    {
      id: 4,
      question: 'Khi đối mặt với khó khăn, bạn thường làm gì?',
      options: [
        { text: 'Tìm sự hỗ trợ từ cộng đồng', value: 'community', influence: 'Tâm lý xã hội' },
        { text: 'Suy nghĩ dựa trên nguyên tắc', value: 'principles', influence: 'Hệ tư tưởng' },
        { text: 'Phân tích điều kiện thực tế', value: 'practical', influence: 'Tồn tại xã hội' },
        { text: 'Làm theo cảm xúc hiện tại', value: 'emotion', influence: 'Tâm lý xã hội' }
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

  const getPersonalityType = (results) => {
    const total = Object.values(results).reduce((a, b) => a + b, 0);
    const percentages = {
      'Tồn tại xã hội': (results['Tồn tại xã hội'] / total) * 100,
      'Tâm lý xã hội': (results['Tâm lý xã hội'] / total) * 100,
      'Hệ tư tưởng': (results['Hệ tư tưởng'] / total) * 100
    };

    // Determine personality type based on combinations
    if (percentages['Tồn tại xã hội'] >= 50) {
      return {
        type: 'Thực tiễn - Duy vật',
        description: 'Bạn là người thực tế, quan tâm đến điều kiện vật chất và môi trường xung quanh. Giá trị của bạn hình thành chủ yếu từ những trải nghiệm thực tế và điều kiện sống.',
        color: '#3b82f6',
        analysis: 'Theo triết học Mác-Lênin, bạn thuộc nhóm có ý thức xã hội chịu ảnh hưởng mạnh từ tồn tại xã hội. Điều này phản ánh mối quan hệ biện chứng giữa vật chất và ý thức.'
      };
    } else if (percentages['Tâm lý xã hội'] >= 50) {
      return {
        type: 'Cảm xúc - Xã hội',
        description: 'Bạn nhạy cảm với xu hướng xã hội và dễ bị ảnh hưởng bởi tâm trạng tập thể. Giá trị của bạn thay đổi linh hoạt theo môi trường và mối quan hệ.',
        color: '#10b981',
        analysis: 'Bạn minh chứng cho tính độc lập tương đối của ý thức xã hội - dù bắt nguồn từ tồn tại xã hội nhưng có khả năng tác động trở lại thông qua tâm lý và cảm xúc tập thể.'
      };
    } else if (percentages['Hệ tư tưởng'] >= 50) {
      return {
        type: 'Lý trí - Nguyên tắc',
        description: 'Bạn đề cao các giá trị truyền thống, nguyên tắc và hệ thống tư tưởng. Giá trị của bạn ổn định và dựa trên nền tảng đạo đức, triết lý rõ ràng.',
        color: '#8b5cf6',
        analysis: 'Điều này phản ánh vai trò của kiến trúc thượng tầng trong việc định hình ý thức xã hội thông qua giáo dục, văn hóa và hệ tư tưởng thống trị.'
      };
    } else if (percentages['Tồn tại xã hội'] > percentages['Tâm lý xã hội'] && percentages['Tồn tại xã hội'] > percentages['Hệ tư tưởng']) {
      return {
        type: 'Cân bằng - Thiên về Thực tiễn',
        description: 'Bạn có sự cân bằng giữa các yếu tố nhưng nghiêng về thực tế. Bạn nhận thức rõ mối quan hệ giữa điều kiện sống và giá trị cá nhân.',
        color: '#6366f1',
        analysis: 'Phản ánh quan điểm duy vật biện chứng: ý thức bắt nguồn từ vật chất nhưng có tính năng động, sáng tạo trong việc cải tạo hiện thực.'
      };
    } else if (percentages['Tâm lý xã hội'] > percentages['Tồn tại xã hội'] && percentages['Tâm lý xã hội'] > percentages['Hệ tư tưởng']) {
      return {
        type: 'Cân bằng - Thiên về Cảm xúc',
        description: 'Bạn cân bằng giữa lý trí và thực tế nhưng dễ bị chi phối bởi cảm xúc xã hội. Bạn nhạy bén với thay đổi và xu hướng mới.',
        color: '#06b6d4',
        analysis: 'Thể hiện tính phong phú, đa dạng của ý thức xã hội, bao gồm cả tâm lý xã hội (cảm tính) và hệ tư tưởng (lý tính).'
      };
    } else {
      return {
        type: 'Cân bằng - Thiên về Lý tưởng',
        description: 'Bạn có sự hài hòa giữa thực tế và cảm xúc nhưng luôn giữ vững nguyên tắc. Giá trị của bạn kết hợp giữa truyền thống và hiện đại.',
        color: '#f59e0b',
        analysis: 'Phản ánh mối quan hệ biện chứng giữa tính kế thừa và tính đấu tranh trong sự phát triển của ý thức xã hội.'
      };
    }
  };

  const getSpecificAdvice = (results, personality) => {
    const maxInfluence = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    
    const adviceMap = {
      'Tồn tại xã hội': {
        title: 'Lời khuyên cho người Thực tiễn',
        tips: [
          'Tiếp tục phát huy tư duy thực tế và khả năng thích nghi với điều kiện mới',
          'Kết hợp thêm yếu tố tình cảm và nguyên tắc trong quyết định quan trọng',
          'Nhận thức rõ hơn về ảnh hưởng của điều kiện kinh tế-xã hội đến giá trị cá nhân'
        ]
      },
      'Tâm lý xã hội': {
        title: 'Lời khuyên cho người Cảm xúc',
        tips: [
          'Phát huy khả năng đồng cảm và thấu hiểu xu hướng xã hội',
          'Cân bằng giữa cảm xúc tập thể và lập trường cá nhân',
          'Nhận diện và vượt qua hiệu ứng đám đông trong quyết định quan trọng'
        ]
      },
      'Hệ tư tưởng': {
        title: 'Lời khuyên cho người Nguyên tắc',
        tips: [
          'Duy trì tính nguyên tắc và hệ giá trị vững chắc',
          'Linh hoạt hơn trong việc tiếp nhận quan điểm mới',
          'Kết nối nguyên tắc với thực tiễn cuộc sống đang thay đổi'
        ]
      }
    };

    return adviceMap[maxInfluence] || adviceMap['Tồn tại xã hội'];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const results = calculateResults();
    const personality = getPersonalityType(results);
    const advice = getSpecificAdvice(results, personality);

    return (
      <div style={{
        background: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '700px',
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
        
        {/* Personality Type */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            background: personality.color + '20',
            border: '2px solid' + personality.color,
            padding: '1.5rem',
            borderRadius: '0.75rem',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: personality.color,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              {personality.type}
            </h3>
            <p style={{ 
              color: '#6b7280', 
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {personality.description}
            </p>
            <div style={{
              background: '#f8fafc',
              padding: '1rem',
              borderRadius: '0.5rem',
              borderLeft: '3px solid' + personality.color
            }}>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.9rem',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {personality.analysis}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#374151', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Phân tích chi tiết ảnh hưởng:
          </h3>
          {Object.entries(results).map(([influence, count]) => {
            const percentage = (count / questions.length * 100).toFixed(0);
            const color = influence === 'Tồn tại xã hội' ? '#3b82f6' : 
                         influence === 'Tâm lý xã hội' ? '#10b981' : '#8b5cf6';
            
            return (
              <div key={influence} style={{
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#4b5563', fontWeight: '500' }}>{influence}</span>
                  <span style={{ color: color, fontWeight: '600' }}>{percentage}%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: '#e5e7eb',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: percentage + '%',
                    height: '100%',
                    background: color,
                    transition: 'width 0.5s ease',
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personalized Advice */}
        <div style={{
          background: '#f0f9ff',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid #bae6fd'
        }}>
          <h4 style={{ 
            color: '#0369a1',
            marginBottom: '1rem',
            fontSize: '1.1rem'
          }}>
            {advice.title}
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '1.5rem',
            color: '#4b5563',
            lineHeight: '1.6'
          }}>
            {advice.tips.map((tip, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {tip}
              </li>
            ))}
          </ul>
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
            fontWeight: '500',
            marginTop: '2rem'
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
          💡 Bài trắc nghiệm phân tích mối quan hệ giữa tồn tại xã hội và ý thức xã hội trong việc hình thành giá trị cá nhân
        </p>
      </div>
    </div>
  );
}
