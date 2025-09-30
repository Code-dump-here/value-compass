export const philosophicalContent = {
  socialConsciousness: {
    definition: 'Ý thức xã hội là toàn bộ đời sống tinh thần của xã hội, bao gồm những quan điểm, tư tưởng, tình cảm, tâm trạng... của xã hội được nảy sinh từ tồn tại xã hội và phản ánh tồn tại xã hội trong những giai đoạn phát triển nhất định.',
    structure: {
      socialPsychology: {
        name: 'Tâm lý xã hội',
        description: 'Toàn bộ tình cảm, tâm trạng, tập quán, truyền thống... của con người trong một cộng đồng xã hội nhất định',
        examples: [
          'Tâm trạng lo âu trong đại dịch',
          'Truyền thống uống nước nhớ nguồn',
          'Trào lưu sống ảo trên mạng xã hội',
          'Tâm lý đám đông trong đầu tư'
        ]
      },
      ideology: {
        name: 'Hệ tư tưởng xã hội',
        description: 'Những quan điểm, tư tưởng được hệ thống hóa thành học thuyết xã hội',
        examples: [
          'Hệ tư tưởng chính trị',
          'Triết học Mác-Lênin',
          'Các học thuyết đạo đức',
          'Quan điểm về phát triển bền vững'
        ]
      }
    },
    relationship: 'Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức xã hội có tính độc lập tương đối và tác động trở lại tồn tại xã hội.'
  }
};

export const youthTrends = [
  {
    id: 1,
    name: 'Sống xanh và Bảo vệ môi trường',
    description: 'Xu hướng sống thân thiện với môi trường trong giới trẻ',
    factors: {
      socialExistence: ['Ô nhiễm môi trường thực tế', 'Phát triển công nghệ xanh', 'Kinh tế phát triển'],
      socialPsychology: ['Trào lưu #ChallengeForChange', 'Tâm lý bắt kịp xu hướng', 'Cảm giác trách nhiệm'],
      ideology: ['Giáo dục môi trường trong trường học', 'Truyền thông về biến đổi khí hậu', 'Giá trị nhân văn']
    }
  },
  {
    id: 2,
    name: 'Văn hóa Tình nguyện',
    description: 'Sự phát triển của hoạt động cộng đồng và thiện nguyện',
    factors: {
      socialExistence: ['Điều kiện kinh tế cho phép', 'Nền tảng kết nối cộng đồng', 'Thời gian rảnh rỗi'],
      socialPsychology: ['Nhu cầu được công nhận', 'Cảm giác thuộc về', 'Tâm lý đồng cảm'],
      ideology: ['Giá trị \"tương thân tương ái\"', 'Giáo dục nhân cách', 'Quan điểm sống có ích']
    }
  }
];

export const historicalPeriods = {
  pre1986: {
    name: 'Thời kỳ Bao cấp',
    economicBase: 'Kinh tế kế hoạch hóa tập trung',
    socialConsciousness: 'Ý thức tập thể, trách nhiệm cộng đồng',
    values: ['Tiết kiệm', 'Kỷ luật', 'Tập thể', 'Yêu nước']
  },
  doiMoi: {
    name: 'Thời kỳ Đổi mới',
    economicBase: 'Kinh tế thị trường định hướng XHCN',
    socialConsciousness: 'Tư duy đổi mới, tinh thần doanh nhân',
    values: ['Sáng tạo', 'Làm giàu', 'Hội nhập', 'Cá nhân']
  }
};
