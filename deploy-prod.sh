 #!/bin/sh
  rsync -av --progress --delete -e 'ssh -p 22 -i ~/.ssh/id_rsa' ./ spiritvy@direct.gustave-et-rosalie.com:~/public_html/blinimixfestival.fr --include=public/.htaccess --include=public/videos --include=public/build --include=vendor --include=.env --exclude-from=.gitignore --exclude=".*"
