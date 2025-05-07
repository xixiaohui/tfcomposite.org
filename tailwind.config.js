// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 1s ease-out',  // 自定义动画名称
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },      // 开始时透明度为 0
            '100%': { opacity: '1' },    // 结束时透明度为 1
          },
        },
      },
    },
    plugins: [],
  }
  