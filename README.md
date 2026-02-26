![alt text](https://github.com/kwquan/Projectesims/blob/main/Projectesims.png)

This repo contains the code used for Project esims, a fullstack project built to simulate an online esims management system that allows users to register account, buy and activate different plans.

このリポジトリには、ユーザーがアカウントを登録し、さまざまなプランを購入およびアクティブ化できるオンライン esims 管理システムをシミュレートするために構築されたフルスタック プロジェクトである Project esims に使用されるコードが含まれています。

## Description

1) User starts from login page(login.html)
2) User can either enter credentials(if account is already created) OR create account
3) If user enters credentials, he is directed to dashboard
4) If user creates account successfuly, he is directed to dashboard
5) From dashboard, user can choose to check his purchased plans OR go to shop
6) In shop, user can buy/edit orders and make payment
7) Upon successful payment, user is directed to his purchased plans
8) User can check plan usage, status, expiry dates of his purchased plans

1) ユーザーはログインページ(login.html)からログインを開始します。
2) ユーザーは認証情報を入力するか（アカウント作成済みの場合）、アカウントを作成します。
3) ユーザーが認証情報を入力すると、ダッシュボードに移動します。
4) ユーザーがアカウントを作成すると、ダッシュボードに移動します。
5) ダッシュボードから、ユーザーは購入したプランを確認するか、ショップに移動するかを選択できます。
6) ショップでは、ユーザーは注文を購入/編集し、支払いを行うことができます。
7) 支払いが完了すると、ユーザーは購入したプランに移動します。
8) ユーザーは、購入したプランの使用状況、ステータス、有効期限を確認できます。

## Notes
1) frontend folder contains 7 html files created using chatgpt
2) 7 typescript files, 6 of them are linked to server.ts which serves as main file
3) init folder contains sql file required to create the 2 tables[users, esims]

1) frontend フォルダには、chatgpt を使用して作成された 7 つの HTML ファイルが含まれています。
2) 7 つの TypeScript ファイルがあり、そのうち 6 つはメインファイルとして機能する server.ts にリンクされています。
3) init フォルダには、2 つのテーブル (users、esims) の作成に必要な SQL ファイルが含まれています。

## Prerequisites
1. Copy paste app esim/project/modules folder to desired directory[アプリのesim/project/modulesフォルダをコピーして、目的のディレクトリに貼り付けます。]
2. Run 'docker compose up --build' in terminal[ターミナルで「docker compose up --build」を実行します。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/docker_compose.png)
3. Ensure container deployed successfully[コンテナが正常にデプロイされていることを確認する]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/compose_res.png)

## Steps
1. Open browser and go to localhost:3000/login.html[ブラウザを開き、localhost:3000/login.html にアクセスします。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_2.png)
2. Login if account already created. Otherwise, create account[すでにアカウントが作成されている場合はログインしてください。そうでない場合はアカウントを作成してください。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_3.png)
3. If create account, enter username[email] and password[アカウントを作成する場合は、ユーザー名[メールアドレス]とパスワードを入力してください]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_4.png)
4. If account created successfully, user is directed back to login page. Enter account credentials and continue[アカウントが正常に作成された場合、ユーザーはログインページに戻ります。アカウントの認証情報を入力して続行してください。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_5.png)
5. User is directed to dashboard. Dashboard contains MyPlans[user purchased plans], Shop[to buy plans] and Logout buttons[ユーザーはダッシュボードに誘導されます。ダッシュボードには、MyPlans[ユーザーが購入したプラン]、Shop[プランを購入する]、ログアウトボタンがあります。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_7.png)
6. User can go to MyPlans. For new users, check to see plans are empty[ユーザーはMyPlansにアクセスできます。新規ユーザーの場合は、プランが空になっていることを確認してください。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_6.png)
7. User can go to Shop and select plans for purchase. Multiples of the same plan can be purchased[increment or decrement button under Quantity column][ユーザーはショップにアクセスし、購入するプランを選択できます。同じプランを複数購入することも可能です。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_8.png)
8. After selecting plans, user can click on 'Add to Cart' button. Cart icon above will show number of plans added[プランを選択したら、「カートに追加」ボタンをクリックします。上部のカートアイコンに追加されたプランの数が表示されます。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_9.png)
9. User can click on Cart icon to check added plans. Click 'Edit Order' and 'Confirm Change' to edit orders. Click 'Proceed to Payment' for payment. Popout message will appear for payment confirmation[カートアイコンをクリックすると、追加したプランを確認できます。「注文を編集」と「変更を確認」をクリックして注文を編集します。「お支払いへ進む」をクリックしてお支払い手続きに進みます。お支払い確認のポップアップメッセージが表示されます。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_10.png)
10. If user clicks 'Yes', he is directed to payment page to enter credit card details. Otherwise, popup message is closed and user can continue editing orders in Cart[ユーザーが「はい」をクリックすると、クレジットカード情報を入力する支払いページに移動します。そうでない場合は、ポップアップメッセージは閉じられ、ユーザーはカート内で注文の編集を続行できます。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_11.png)
11. If user proceeds to payment, need to ensure fields are entered correctly[16 digits for credit card number, correct numbers for month and year][ユーザーが支払いに進む場合、フィールドが正しく入力されていることを確認する必要があります]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_12.png)
12. Once payment is confirmed, popup message appears and user can click on button to be directed to MyPlans[支払いが確認されると、ポップアップメッセージが表示され、ユーザーはボタンをクリックしてMyPlansに移動できます。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_13.png)
13. In MyPlans page, check that purchased plans appear. When newly-purchased, all plans will have new status and None expiry date[マイプランページで、購入したプランが表示されていることを確認してください。新規購入の場合、すべてのプランのステータスは新しくなり、有効期限は「なし」になります。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_14.png)
14. User can click on 'Activate' button to activate a plan. Observe that status is changed to 'activated' and expiry date is changed to current date + duration[ユーザーは「有効化」ボタンをクリックしてプランを有効化できます。ステータスが「有効化済み」に変更され、有効期限が現在の日付 + 期間に変更されていることを確認してください。]
![alt text](https://github.com/kwquan/Projectesims/blob/main/images/step_15.png)
   
