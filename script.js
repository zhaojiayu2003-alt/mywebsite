document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('img1');
    
    if (img) {
        img.addEventListener('click', function() {
            alert('你点击了图片！这是JavaScript的交互功能！');
        });
        
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    console.log('页面加载完成，JavaScript已就绪！');
});