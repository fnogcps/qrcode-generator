<?php

require_once('../vendor/autoload.php');

use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use DateTimeImmutable;

$text = filter_input(INPUT_POST, "text", FILTER_SANITIZE_URL);

$renderer = new ImageRenderer(
    new RendererStyle(400),
    new ImagickImageBackEnd()
);

$writer = new Writer($renderer);
echo json_encode(base64_encode($writer->writeString($text)));
die();
