#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting image conversion to WebP...${NC}"

# Create backup directory
BACKUP_DIR="images_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR

# Backup original images
echo -e "${BLUE}Creating backup in $BACKUP_DIR...${NC}"
find src/assets/img -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -exec cp {} $BACKUP_DIR/ \;

# Convert images to WebP
find src/assets/img -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read img; do
    echo "Converting: $img"
    filename=$(basename "$img")
    name="${filename%.*}"
    webp_path="src/assets/img/${name}.webp"
    
    # Convert and optimize
    cwebp -q 80 -m 6 "$img" -o "$webp_path"
    
    # Remove original file after successful conversion
    if [ $? -eq 0 ]; then
        echo "Successfully converted $img to WebP"
        rm "$img"
    else
        echo "Failed to convert $img"
    fi
done

# Calculate size difference
ORIGINAL_SIZE=$(du -sh $BACKUP_DIR | cut -f1)
OPTIMIZED_SIZE=$(du -sh src/assets/img | cut -f1)

echo -e "${GREEN}Conversion complete!${NC}"
echo -e "Original size: ${BLUE}$ORIGINAL_SIZE${NC}"
echo -e "Optimized size: ${BLUE}$OPTIMIZED_SIZE${NC}"
echo -e "${GREEN}Backup saved in: $BACKUP_DIR${NC}"