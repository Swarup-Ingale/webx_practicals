# CTF Writeup: Cold Storage

**Challenge Name:** Cold Storage  
**Category:** Forensics / Steganography  
**Difficulty:** Medium  

## 1. Initial Analysis
The challenge provided a 257MB disk image file named `cold_storage.img`. My first step was to identify the filesystem structure:

```bash
file cold_storage.img
# Output: DOS/MBR boot sector, FAT (32 bit)
```

I used `fls` from the Sleuth Kit to list the files, including deleted ones:

```bash
fls -r cold_storage.img
# Output identified several logs and a deleted PNG:
# r/r * 9: _MG00142.PNG
```

## 2. File Recovery
The PNG file was marked as deleted. I checked its metadata using `istat` to find its cluster location and size:
- **Inode:** 9
- **Size:** 120,303 bytes
- **Start Sector:** 525930

I manually extracted the PNG using `dd`:
```bash
dd if=cold_storage.img bs=1 skip=269276160 count=120303 of=recovered.png
```

## 3. Steganography
Running `exiftool` on the recovered PNG gave a warning: `Trailer data after PNG IEND chunk`. This was the first hint. However, I first analyzed the pixel data for hidden messages.

Using a custom Python script to extract the **Least Significant Bits (LSB)** from the RGB channels:
```python
# (Logic: Extract bit 0 of every color byte, group into 8 bits to form chars)
```
This revealed the following string:
`wip3d_cl3an|The answer was never in the file.`

## 4. Slack Space Exploration
The LSB message was a double-clue. `wip3d_cl3an` looked like a password or XOR key, and "never in the file" suggested the flag was in the **slack space** (the space between the end of the file and the end of the physical disk cluster).

I examined the sectors immediately following the PNG's end:
```bash
dd if=cold_storage.img bs=512 skip=526165 count=5 | xxd
```
I found a sequence of non-zero "trailer" bytes that were not part of any official file.

## 5. Decryption & Flag Retrieval
The trailer data appeared to be XOR-encrypted. I attempted to use `wip3d_cl3an` as the XOR key.

By aligning the key and XORing it with the trailer data found in the slack space:
```python
data = bytes.fromhex('2425337832250c146b1f3b50...') # Trailer bytes
key = b'wip3d_cl3an'
# XOR logic revealed the flag starting at the 6th byte
```

**Decrypted Flag:** `RedX{d3l3t3d_but_n3v3r_g0n3_sl4ck_sp4c3_t3ll5_4ll}`
