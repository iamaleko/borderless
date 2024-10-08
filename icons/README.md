# How to create an `.icns` macOS app icon

> How to make an application icon for macOS using `iconset` & `iconutil`

## Steps

- [Saving images](#saving-images)
- [Creating an `.iconset`](#creating-an-iconset)
- [Converting to `.icns`](#converting-to-icns)

## Saving images

Save your app icon with the following names & dimensions:

| Name | Dimensions |
| ---- | ---------- |
| `icon_16x16.png` | `16x16` |
| `icon_16x16@2x.png` | `32x32` |
| `icon_32x32.png` | `32x32` |
| `icon_32x32@2x.png` | `64x64` |
| `icon_128x128.png` | `128x128` |
| `icon_128x128@2x.png` | `256x256` |
| `icon_256x256.png` | `256x256` |
| `icon_256x256@2x.png` | `512x512` |
| `icon_512x512.png` | `512x512` |
| `icon_512x512@2x.png` | `1024x1024` |

## Creating an `.iconset`

1. Move all of the images into a new folder
2. Rename the folder to: `icon.iconset`
3. Confirm the file extension when prompted

This will convert the folder of images into an iconset, this can be verified by quick looking with the spacebar - a resizable preview of your icon should now appear.

## Converting to `.icns`

1. Navigate to the directory containing your `icon.iconset` in the terminal
2. Run `iconutil` with the following command: `iconutil -c icns icon.iconset`
3. Your `icon.icns` will be generated in the current directory