// 當畫面滾動時顯示或隱藏回到頂部按鈕
window.onscroll = function() {
    const btn = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block'; // 當滾動超過100px時顯示按鈕
    } else {
        btn.style.display = 'none'; // 否則隱藏按鈕
    }
};

// 回到頂部功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 平滑滾動至頂部
}

// 更換主圖片
function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}
