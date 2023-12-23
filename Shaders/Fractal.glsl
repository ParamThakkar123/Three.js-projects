void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 normalizedCoord = fragCoord / iResolution.xy * 2.0 - 1.0;
    float angle = iTime * 0.3;
    for(float i = 0.0; i < 32.0; i++){
        normalizedCoord = abs(normalizedCoord);
        normalizedCoord -= 0.5;
        normalizedCoord *= 1.1;
    
        normalizedCoord *= mat2(
            cos(angle), -sin(angle),
            sin(angle), cos(angle)
        );
    }
    fragColor = vec4(length(normalizedCoord), length(normalizedCoord + vec2(0.2, -0.3)), length(normalizedCoord + vec2(-0.4, -0.1)), 1.0);
    
}
