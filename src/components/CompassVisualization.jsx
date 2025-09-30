import { useState } from 'react';

export default function CompassVisualization() {
  const [selectedSector, setSelectedSector] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  
  const sectors = [
    { 
      id: 1, 
      name: 'Giáo dục', 
      angle: 0, 
      color: '#fecaca', 
      description: 'Hệ thống giáo dục và đào tạo',
      philosophicalAnalysis: 'Giáo dục thuộc về kiến trúc thượng tầng, đóng vai trò truyền bá hệ tư tưởng thống trị và tái sản xuất lực lượng lao động có kỹ năng phù hợp với quan hệ sản xuất hiện hành.',
      marxistPerspective: 'Theo Mác, giáo dục không chỉ truyền đạt tri thức mà còn là công cụ để giai cấp thống trị duy trì hệ tư tưởng của mình.',
      realWorldExample: 'Giáo dục đại học ở Việt Nam đang chuyển từ mô hình bao cấp sang mô hình thị trường, phản ánh sự thay đổi của quan hệ sản xuất.'
    },
    { 
      id: 2, 
      name: 'Truyền thông', 
      angle: 72, 
      color: '#bfdbfe', 
      description: 'Báo chí, mạng xã hội, truyền hình',
      philosophicalAnalysis: 'Truyền thông là một bộ phận của kiến trúc thượng tầng, có chức năng tuyên truyền đường lối, chính sách và định hướng dư luận xã hội.',
      marxistPerspective: 'Truyền thông phản ánh lợi ích giai cấp và thường bị chi phối bởi những người nắm giữ tư liệu sản xuất thông tin.',
      realWorldExample: 'Sự bùng nổ của mạng xã hội ở Việt Nam tạo ra không gian công cộng mới, nơi ý thức xã hội được hình thành và biến đổi nhanh chóng.'
    },
    { 
      id: 3, 
      name: 'Gia đình', 
      angle: 144, 
      color: '#bbf7d0', 
      description: 'Giá trị gia đình và truyền thống',
      philosophicalAnalysis: 'Gia đình là tế bào của xã hội, vừa là đơn vị kinh tế cơ bản vừa là nơi hình thành ý thức xã hội đầu tiên của con người.',
      marxistPerspective: 'Engels cho rằng hình thái gia đình thay đổi theo sự phát triển của xã hội, từ chế độ mẫu hệ đến phụ hệ phù hợp với chế độ tư hữu.',
      realWorldExample: 'Quan hệ gia đình Việt Nam đang chuyển từ mô hình đại gia đình sang tiểu gia đình, phản ánh quá trình đô thị hóa và công nghiệp hóa.'
    },
    { 
      id: 4, 
      name: 'Bạn bè', 
      angle: 216, 
      color: '#fef08a', 
      description: 'Ảnh hưởng từ môi trường xã hội',
      philosophicalAnalysis: 'Quan hệ bạn bè thuộc về quan hệ xã hội, hình thành trong quá trình lao động và sinh hoạt, có ảnh hưởng trực tiếp đến sự hình thành ý thức cá nhân.',
      marxistPerspective: 'Trong xã hội có giai cấp, quan hệ bạn bè thường phản ánh vị trí giai cấp và bị chi phối bởi lợi ích giai cấp.',
      realWorldExample: 'Giới trẻ đô thị Việt Nam hình thành các nhóm bạn theo sở thích và nghề nghiệp, tạo ra các tiểu văn hóa với hệ giá trị riêng.'
    },
    { 
      id: 5, 
      name: 'Kinh tế', 
      angle: 288, 
      color: '#e9d5ff', 
      description: 'Điều kiện kinh tế - xã hội',
      philosophicalAnalysis: 'Điều kiện kinh tế là cơ sở hạ tầng quyết định toàn bộ kiến trúc thượng tầng, bao gồm các thiết chế chính trị, pháp quyền và ý thức xã hội.',
      marxistPerspective: 'Theo chủ nghĩa duy vật lịch sử, tồn tại xã hội (điều kiện vật chất) quyết định ý thức xã hội (tinh thần).',
      realWorldExample: 'Sự phát triển kinh tế thị trường ở Việt Nam dẫn đến sự thay đổi hệ giá trị từ tập thể sang cá nhân, từ ổn định sang sáng tạo và mạo hiểm.'
    }
  ];

  const compassSize = 300;
  const center = compassSize / 2;
  const buttonRadius = 35;
  const orbitRadius = 100;

  const clearSelection = () => {
    setSelectedSector(null);
  };

  const getCenterButtonStyle = () => {
    const baseStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '80px',
      height: '80px',
      background: selectedSector ? '#3b82f6' : 'white',
      borderRadius: '50%',
      border: selectedSector ? '2px solid #1e40af' : '2px solid #6b7280',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      cursor: selectedSector ? 'pointer' : 'default',
      flexDirection: 'column',
      gap: '2px',
      transition: 'all 0.3s ease'
    };

    if (selectedSector && isCenterHovered) {
      return {
        ...baseStyle,
        background: '#1e40af',
        transform: 'translate(-50%, -50%) scale(1.05)'
      };
    }

    return baseStyle;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h3 style={{ marginBottom: '2rem', color: '#1e40af', textAlign: 'center' }}>
        Các yếu tố ảnh hưởng đến giá trị
      </h3>
      
      {/* Compass Container */}
      <div style={{
        position: 'relative',
        width: compassSize + 'px',
        height: compassSize + 'px',
        background: '#f8fafc',
        borderRadius: '50%',
        border: '4px solid #cbd5e1',
        marginBottom: '2rem'
      }}>
        {/* Connecting lines */}
        {sectors.map(sector => {
          const angleInRadians = (sector.angle * Math.PI) / 180;
          
          return (
            <div
              key={'line-' + sector.id}
              style={{
                position: 'absolute',
                left: center + 'px',
                top: center + 'px',
                width: orbitRadius + 'px',
                height: '2px',
                background: '#e5e7eb',
                transform: 'rotate(' + sector.angle + 'deg)',
                transformOrigin: '0 0',
                zIndex: 1
              }}
            />
          );
        })}

        {/* Center circle - Clear Selection Button */}
        <button
          onClick={clearSelection}
          onMouseEnter={() => selectedSector && setIsCenterHovered(true)}
          onMouseLeave={() => setIsCenterHovered(false)}
          style={getCenterButtonStyle()}
          disabled={!selectedSector}
        >
          <span style={{ 
            fontSize: '0.7rem', 
            fontWeight: 'bold', 
            color: selectedSector ? 'white' : '#374151', 
            textAlign: 'center',
            lineHeight: '1.1'
          }}>
            {selectedSector ? 'Xóa' : 'Giá trị'}<br />
            {selectedSector ? 'lựa chọn' : 'cá nhân'}
          </span>
          {selectedSector && (
            <div style={{
              width: '20px',
              height: '2px',
              background: 'white',
              borderRadius: '1px',
              marginTop: '2px',
              opacity: isCenterHovered ? 1 : 0.8
            }}></div>
          )}
        </button>

        {/* Sector buttons */}
        {sectors.map(sector => {
          const angleInRadians = (sector.angle * Math.PI) / 180;
          const buttonCenterX = center + orbitRadius * Math.cos(angleInRadians);
          const buttonCenterY = center + orbitRadius * Math.sin(angleInRadians);
          
          return (
            <button
              key={sector.id}
              style={{
                position: 'absolute',
                left: (buttonCenterX - buttonRadius) + 'px',
                top: (buttonCenterY - buttonRadius) + 'px',
                width: (buttonRadius * 2) + 'px',
                height: (buttonRadius * 2) + 'px',
                background: sector.color,
                borderRadius: '50%',
                border: selectedSector === sector.id ? '3px solid #3b82f6' : '2px solid #9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 3,
                transform: selectedSector === sector.id ? 'scale(1.1)' : 'scale(1)'
              }}
              onClick={() => setSelectedSector(sector.id === selectedSector ? null : sector.id)}
            >
              <span style={{ 
                fontSize: '0.7rem', 
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '1.1'
              }}>
                {sector.name}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Enhanced Information display */}
      {selectedSector && (
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          border: '2px solid #3b82f6',
          marginBottom: '1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ 
              color: '#1e40af', 
              marginBottom: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              {sectors.find(s => s.id === selectedSector).name}
            </h4>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1rem',
              fontStyle: 'italic',
              margin: 0
            }}>
              {sectors.find(s => s.id === selectedSector).description}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Philosophical Analysis */}
            <div>
              <h5 style={{ 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#3b82f6' }}>📚</span>
                Phân tích Triết học
              </h5>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                margin: 0,
                background: '#f8fafc',
                padding: '1rem',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #3b82f6'
              }}>
                {sectors.find(s => s.id === selectedSector).philosophicalAnalysis}
              </p>
            </div>

            {/* Marxist Perspective */}
            <div>
              <h5 style={{ 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#dc2626' }}>⚒️</span>
                Góc nhìn Mác-xít
              </h5>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                margin: 0,
                background: '#fef2f2',
                padding: '1rem',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #dc2626'
              }}>
                {sectors.find(s => s.id === selectedSector).marxistPerspective}
              </p>
            </div>

            {/* Real World Example */}
            <div>
              <h5 style={{ 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#059669' }}>🌍</span>
                Ví dụ thực tế ở Việt Nam
              </h5>
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.9rem', 
                lineHeight: '1.6',
                margin: 0,
                background: '#f0fdf4',
                padding: '1rem',
                borderRadius: '0.5rem',
                borderLeft: '3px solid #059669'
              }}>
                {sectors.find(s => s.id === selectedSector).realWorldExample}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!selectedSector && (
        <div style={{
          background: '#f0f9ff',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          textAlign: 'center',
          maxWidth: '500px',
          border: '1px solid #bae6fd'
        }}>
          <h5 style={{ 
            color: '#0369a1', 
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            🧭 Hướng dẫn sử dụng
          </h5>
          <p style={{ 
            color: '#0369a1', 
            fontSize: '0.9rem', 
            margin: 0,
            lineHeight: '1.5'
          }}>
            Nhấn vào các yếu tố xung quanh để khám phá phân tích triết học chi tiết về 
            <strong> mối quan hệ giữa tồn tại xã hội và ý thức xã hội</strong> theo quan điểm Mác-Lênin.
          </p>
        </div>
      )}

      {selectedSector && (
        <div style={{
          background: '#fef7ed',
          padding: '1rem',
          borderRadius: '0.5rem',
          textAlign: 'center',
          maxWidth: '500px',
          border: '1px solid #fed7aa'
        }}>
          <p style={{ 
            color: '#92400e', 
            fontSize: '0.85rem', 
            margin: 0,
            fontWeight: '500',
            lineHeight: '1.4'
          }}>
            💡 <strong>Mẹo:</strong> Nhấn vào nút giữa để xóa lựa chọn hoặc nhấn vào yếu tố khác để so sánh
          </p>
        </div>
      )}
    </div>
  );
}
