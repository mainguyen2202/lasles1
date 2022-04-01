# lasles1
lasles 

    cài sass 
    npm install -g sass

    đây là chạy sass
Cách 1: sẽ tạo cùng foder sass

sass sass/app.scss sass/app.css --watch 

cách 2: sẽ tạo ra 1 foder mới cho css
sass sass/app.scss css/app.css

<!--  -->
        1. facb
        display:flex;
        justify-content: space-between;
        align-items: center;

        2. facenter
        display: flex;
        align-items: center;

        3. user-grid :  dùng cho việc chia cột
        display: grid;
        grid-template-columns: ;
        grid-gap: ;
<!--  -->
 display: flex;                  /*Kích hoạt flexbox*/
    flex-direction: row;            /*Thiết lập hướng chính*/
    flex-wrap: nowrap;              /*Thiết lập chế độ wrap, khi các phần tử vượt qua kích thước hướng chính*/
    justify-content: flex-end;      /*Căn chỉnh nội dung bên trong container có flexbox*/
    align-items: stretch;           /*Căn chỉnh phần tử con theo hướng vuông góc hướng chính*/
    align-content: stretch;         /*Căn chỉnh hàng (cột) theo hướng vuông góc (chỉ hiệu lực khi nhiều hàng hoặc cột)*/

    <!-- các màn hình cần kiểm tra lại -->
    1024 : iPad 
    1023  : iPad pro
    767             : iPhone 6/7/8 Plus
    1230             :
