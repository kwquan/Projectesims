# Project esims

![alt text](https://github.com/kwquan/Projectesims/blob/main/images/Projectesims.png

This repo contains the code used for Project esims, a fullstack project built to simulate an online esims management system that allows users to register, buy and activate different plans.

## Description

1) User starts from login page(login.html)
2) User can either enter credentials(if account is already created) OR create account
3) If user enters credentials, he is directed to dashboard
4) If user creates account successfuly, he is directed to dashboard
5) From dashboard, user can choose to check his purchased plans OR go to shop
6) In shop, user can buy/edit orders and make payment
7) Upon successful payment, user is directed to his purchased plans
8) User can check plan usage, status, expiry dates of his purchased plans

## Notes
1) frontend folder contains 7 html files created using chatgpt
2) 7 typescript files, 6 of them are linked to server.ts which serves as main file
3) init folder contains sql file required to create the 2 tables[users, esims]

## Prerequisites
1. Copy paste app folder to desired directory
2. Run 'docker compose up --build' in terminal
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/docker_compose.png
3. Ensure container deployed successfully
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/compose_res.png

## Steps
1. Open browser and go to localhost:3000/login.html
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_2.png
2. Login if account already created. Otherwise, create account
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_3.png
3. If create account, enter username[email] and password
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_4.png
4. If account created successfully, user is directed back to login page. Enter account credentials and continue
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_5.png
5. User is directed to dashboard. Dashboard contains MyPlans[user purchased plans], Shop[to buy plans] and Logout buttons
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_7.png
6. User can go to MyPlans. For new users, check to see plans are empty.
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_6.png
7. User can go to Shop and select plans for purchase. Multiples of the same plan can be purchased[increment or decrement button under Quantity column]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_8.png
8. After selecting plans, user can click on 'Add to Cart' button. Cart icon above will show number of plans added
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_9.png
9. User can click on Cart icon to check added plans. Click 'Edit Order' and 'Confirm Change' to edit orders. Click 'Proceed to Payment' for payment. Popout message will appear for payment confirmation
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_10.png
10. If user clicks 'Yes', he is directed to payment page to enter credit card details. Otherwise, popup message is closed and user can continue editing orders in Cart
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_11.png
11. If user proceeds to payment, need to ensure fields are entered correctly[16 digits for credit card number, correct numbers for month and year]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_12.png
12. Once payment is confirmed, popup message appears and user can click on button to be directed to MyPlans
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_13.png
13. In MyPlans page, check that purchased plans appear. When newly-purchased, all plans will have new status and None expiry date
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_14.png
14. User can click on 'Activate' button to activate a plan. Observe that status is changed to 'activated' and expiry date is changed to current date + duration
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_15.png
   
