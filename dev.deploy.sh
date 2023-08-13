#!/bin/bash
printf "====================================================\n"
printf "   Synchronization with rsync $(date +'%T')\n"
printf "====================================================\n"

key='Ythe@ZcJqNp*'
ip_live="103.166.182.62"
DOMAIN_NAME="mining"

yarn install
yarn run build

options='sshpass -p $key rsync -avzhe ssh -e "ssh -p 24700 -o StrictHostKeyChecking=no" --progress --timeout=5'
eval $options --exclude 'node_modules' --exclude '.git' "${PWD}"/ root@$ip_live:/home/minhnhut/$DOMAIN_NAME

# eval $options
# options='sshpass -p 24700 $key ssh root@$ip_live "cd /home/minhnhut/hcmus.mining && pm2 restart all --update-env"'
# eval $options
# echo "bundle done"

printf "====================================================\n"
printf "     Done with rsync $(date +'%T')\n"
