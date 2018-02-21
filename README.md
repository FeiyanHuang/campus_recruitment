## 环境初始化

```
ssh xiansi (Shangyu@1608)

sudo apt-get update
sudo apt-get install git
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install pm2 -g

git clone https://github.com/cellmigrate/xiansi.git
cd xiansi
npm install

## pm2 start --name xiansi npm --no-automation -- run start
```

## 代码更新
```
git pull origin master
npm install
pm2 restart 0
```

## 配置域名
```
https://docs.microsoft.com/en-in/azure/cloud-services/cloud-services-custom-domain-name-portal#add-a-cname-record-for-your-custom-domain
```
