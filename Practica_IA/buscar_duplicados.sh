#!/bin/bash

# Script para encontrar archivos duplicados basados en su hash MD5
# Busca en el directorio actual y subdirectorios

echo "Buscando archivos duplicados... Esto puede tardar dependiendo del tamaño de tu carpeta."
echo "--------------------------------------------------------------------------------"

# 1. Encontrar todos los archivos regulares
# 2. Calcular el hash MD5 de cada uno
# 3. Ordenar por hash
# 4. Agrupar los que tengan el mismo hash
# 5. Filtrar solo aquellos que aparecen más de una vez

find . -type f -exec md5sum {} + | sort | uniq -w32 -d | awk '{print $1}' > /tmp/dups.txt

if [ ! -s /tmp/dups.txt ]; then
    echo "No se encontraron archivos duplicados."
    rm /tmp/dups.txt
    exit 0
fi

echo "Archivos duplicados encontrados:"
echo "--------------------------------------------------------------------------------"

while read -r hash; do
    echo "Hash: $hash"
    # Buscar todos los archivos que coincidan con este hash
    find . -type f -exec md5sum {} + | grep "^$hash" | cut -d ' ' -f 3-
    echo "--------------------------------------------------------------------------------"
done < /tmp/dups.txt

rm /tmp/dups.txt
