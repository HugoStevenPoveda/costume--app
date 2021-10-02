$var = Read-Host -Prompt 'Escribir comentario del commit'
git add .
git commit -m "  $var"
