$var = Read-Host -Prompt 'Escribir comentario del commit'
git add .
git commit -m " este commit $var"
git push