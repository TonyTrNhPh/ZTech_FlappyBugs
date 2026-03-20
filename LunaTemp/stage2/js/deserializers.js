var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.JointSpring' )
  var i2631 = data
  i2630.spring = i2631[0]
  i2630.damper = i2631[1]
  i2630.targetPosition = i2631[2]
  return i2630
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.JointMotor' )
  var i2633 = data
  i2632.m_TargetVelocity = i2633[0]
  i2632.m_Force = i2633[1]
  i2632.m_FreeSpin = i2633[2]
  return i2632
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.JointLimits' )
  var i2635 = data
  i2634.m_Min = i2635[0]
  i2634.m_Max = i2635[1]
  i2634.m_Bounciness = i2635[2]
  i2634.m_BounceMinVelocity = i2635[3]
  i2634.m_ContactDistance = i2635[4]
  i2634.minBounce = i2635[5]
  i2634.maxBounce = i2635[6]
  return i2634
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.JointDrive' )
  var i2637 = data
  i2636.m_PositionSpring = i2637[0]
  i2636.m_PositionDamper = i2637[1]
  i2636.m_MaximumForce = i2637[2]
  i2636.m_UseAcceleration = i2637[3]
  return i2636
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2639 = data
  i2638.m_Spring = i2639[0]
  i2638.m_Damper = i2639[1]
  return i2638
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2641 = data
  i2640.m_Limit = i2641[0]
  i2640.m_Bounciness = i2641[1]
  i2640.m_ContactDistance = i2641[2]
  return i2640
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2642 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2643 = data
  i2642.m_ExtremumSlip = i2643[0]
  i2642.m_ExtremumValue = i2643[1]
  i2642.m_AsymptoteSlip = i2643[2]
  i2642.m_AsymptoteValue = i2643[3]
  i2642.m_Stiffness = i2643[4]
  return i2642
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2645 = data
  i2644.m_LowerAngle = i2645[0]
  i2644.m_UpperAngle = i2645[1]
  return i2644
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2647 = data
  i2646.m_MotorSpeed = i2647[0]
  i2646.m_MaximumMotorTorque = i2647[1]
  return i2646
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2649 = data
  i2648.m_DampingRatio = i2649[0]
  i2648.m_Frequency = i2649[1]
  i2648.m_Angle = i2649[2]
  return i2648
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2651 = data
  i2650.m_LowerTranslation = i2651[0]
  i2650.m_UpperTranslation = i2651[1]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2652 = root || new pc.UnityMaterial()
  var i2653 = data
  i2652.name = i2653[0]
  request.r(i2653[1], i2653[2], 0, i2652, 'shader')
  i2652.renderQueue = i2653[3]
  i2652.enableInstancing = !!i2653[4]
  var i2655 = i2653[5]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2655[i + 0]) );
  }
  i2652.floatParameters = i2654
  var i2657 = i2653[6]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2657[i + 0]) );
  }
  i2652.colorParameters = i2656
  var i2659 = i2653[7]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2659[i + 0]) );
  }
  i2652.vectorParameters = i2658
  var i2661 = i2653[8]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2661[i + 0]) );
  }
  i2652.textureParameters = i2660
  var i2663 = i2653[9]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2663[i + 0]) );
  }
  i2652.materialFlags = i2662
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2667 = data
  i2666.name = i2667[0]
  i2666.value = i2667[1]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.value = new pc.Color(i2671[1], i2671[2], i2671[3], i2671[4])
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.value = new pc.Vec4( i2675[1], i2675[2], i2675[3], i2675[4] )
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2679 = data
  i2678.name = i2679[0]
  request.r(i2679[1], i2679[2], 0, i2678, 'value')
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2683 = data
  i2682.name = i2683[0]
  i2682.enabled = !!i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.width = i2685[1]
  i2684.height = i2685[2]
  i2684.mipmapCount = i2685[3]
  i2684.anisoLevel = i2685[4]
  i2684.filterMode = i2685[5]
  i2684.hdr = !!i2685[6]
  i2684.format = i2685[7]
  i2684.wrapMode = i2685[8]
  i2684.alphaIsTransparency = !!i2685[9]
  i2684.alphaSource = i2685[10]
  i2684.graphicsFormat = i2685[11]
  i2684.sRGBTexture = !!i2685[12]
  i2684.desiredColorSpace = i2685[13]
  i2684.wrapU = i2685[14]
  i2684.wrapV = i2685[15]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2687 = data
  i2686.position = new pc.Vec3( i2687[0], i2687[1], i2687[2] )
  i2686.scale = new pc.Vec3( i2687[3], i2687[4], i2687[5] )
  i2686.rotation = new pc.Quat(i2687[6], i2687[7], i2687[8], i2687[9])
  return i2686
}

Deserializers["MoveBehavior"] = function (request, data, root) {
  var i2688 = root || request.c( 'MoveBehavior' )
  var i2689 = data
  i2688._speed = i2689[0]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2691 = data
  i2690.usedByComposite = !!i2691[0]
  i2690.autoTiling = !!i2691[1]
  i2690.size = new pc.Vec2( i2691[2], i2691[3] )
  i2690.edgeRadius = i2691[4]
  i2690.enabled = !!i2691[5]
  i2690.isTrigger = !!i2691[6]
  i2690.usedByEffector = !!i2691[7]
  i2690.density = i2691[8]
  i2690.offset = new pc.Vec2( i2691[9], i2691[10] )
  request.r(i2691[11], i2691[12], 0, i2690, 'material')
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2693 = data
  i2692.color = new pc.Color(i2693[0], i2693[1], i2693[2], i2693[3])
  request.r(i2693[4], i2693[5], 0, i2692, 'sprite')
  i2692.flipX = !!i2693[6]
  i2692.flipY = !!i2693[7]
  i2692.drawMode = i2693[8]
  i2692.size = new pc.Vec2( i2693[9], i2693[10] )
  i2692.tileMode = i2693[11]
  i2692.adaptiveModeThreshold = i2693[12]
  i2692.maskInteraction = i2693[13]
  i2692.spriteSortPoint = i2693[14]
  i2692.enabled = !!i2693[15]
  request.r(i2693[16], i2693[17], 0, i2692, 'sharedMaterial')
  var i2695 = i2693[18]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2692.sharedMaterials = i2694
  i2692.receiveShadows = !!i2693[19]
  i2692.shadowCastingMode = i2693[20]
  i2692.sortingLayerID = i2693[21]
  i2692.sortingOrder = i2693[22]
  i2692.lightmapIndex = i2693[23]
  i2692.lightmapSceneIndex = i2693[24]
  i2692.lightmapScaleOffset = new pc.Vec4( i2693[25], i2693[26], i2693[27], i2693[28] )
  i2692.lightProbeUsage = i2693[29]
  i2692.reflectionProbeUsage = i2693[30]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2699 = data
  i2698.name = i2699[0]
  i2698.tagId = i2699[1]
  i2698.enabled = !!i2699[2]
  i2698.isStatic = !!i2699[3]
  i2698.layer = i2699[4]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2701 = data
  i2700.name = i2701[0]
  i2700.index = i2701[1]
  i2700.startup = !!i2701[2]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2703 = data
  i2702.aspect = i2703[0]
  i2702.orthographic = !!i2703[1]
  i2702.orthographicSize = i2703[2]
  i2702.backgroundColor = new pc.Color(i2703[3], i2703[4], i2703[5], i2703[6])
  i2702.nearClipPlane = i2703[7]
  i2702.farClipPlane = i2703[8]
  i2702.fieldOfView = i2703[9]
  i2702.depth = i2703[10]
  i2702.clearFlags = i2703[11]
  i2702.cullingMask = i2703[12]
  i2702.rect = i2703[13]
  request.r(i2703[14], i2703[15], 0, i2702, 'targetTexture')
  i2702.usePhysicalProperties = !!i2703[16]
  i2702.focalLength = i2703[17]
  i2702.sensorSize = new pc.Vec2( i2703[18], i2703[19] )
  i2702.lensShift = new pc.Vec2( i2703[20], i2703[21] )
  i2702.gateFit = i2703[22]
  i2702.commandBufferCount = i2703[23]
  i2702.cameraType = i2703[24]
  i2702.enabled = !!i2703[25]
  return i2702
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2705 = data
  i2704.m_RenderShadows = !!i2705[0]
  i2704.m_RequiresDepthTextureOption = i2705[1]
  i2704.m_RequiresOpaqueTextureOption = i2705[2]
  i2704.m_CameraType = i2705[3]
  var i2707 = i2705[4]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 1, i2706, '')
  }
  i2704.m_Cameras = i2706
  i2704.m_RendererIndex = i2705[5]
  i2704.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2705[6] )
  request.r(i2705[7], i2705[8], 0, i2704, 'm_VolumeTrigger')
  i2704.m_VolumeFrameworkUpdateModeOption = i2705[9]
  i2704.m_RenderPostProcessing = !!i2705[10]
  i2704.m_Antialiasing = i2705[11]
  i2704.m_AntialiasingQuality = i2705[12]
  i2704.m_StopNaN = !!i2705[13]
  i2704.m_Dithering = !!i2705[14]
  i2704.m_ClearDepth = !!i2705[15]
  i2704.m_AllowXRRendering = !!i2705[16]
  i2704.m_AllowHDROutput = !!i2705[17]
  i2704.m_UseScreenCoordOverride = !!i2705[18]
  i2704.m_ScreenSizeOverride = new pc.Vec4( i2705[19], i2705[20], i2705[21], i2705[22] )
  i2704.m_ScreenCoordScaleBias = new pc.Vec4( i2705[23], i2705[24], i2705[25], i2705[26] )
  i2704.m_RequiresDepthTexture = !!i2705[27]
  i2704.m_RequiresColorTexture = !!i2705[28]
  i2704.m_Version = i2705[29]
  i2704.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2705[30], i2704.m_TaaSettings)
  return i2704
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2711 = data
  i2710.m_Quality = i2711[0]
  i2710.m_FrameInfluence = i2711[1]
  i2710.m_JitterScale = i2711[2]
  i2710.m_MipBias = i2711[3]
  i2710.m_VarianceClampScale = i2711[4]
  i2710.m_ContrastAdaptiveSharpening = i2711[5]
  return i2710
}

Deserializers["DeviceManager"] = function (request, data, root) {
  var i2712 = root || request.c( 'DeviceManager' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'cam')
  i2712.phoneMultiplier = i2713[2]
  i2712.tallPhoneMultiplier = i2713[3]
  i2712.tabletMultiplier = i2713[4]
  return i2712
}

Deserializers["UnityEngine.Rendering.Universal.Light2D"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.Rendering.Universal.Light2D' )
  var i2715 = data
  i2714.m_ComponentVersion = i2715[0]
  i2714.m_LightType = i2715[1]
  i2714.m_BlendStyleIndex = i2715[2]
  i2714.m_FalloffIntensity = i2715[3]
  i2714.m_Color = new pc.Color(i2715[4], i2715[5], i2715[6], i2715[7])
  i2714.m_Intensity = i2715[8]
  i2714.m_LightVolumeIntensity = i2715[9]
  i2714.m_LightVolumeIntensityEnabled = !!i2715[10]
  i2714.m_ApplyToSortingLayers = i2715[11]
  request.r(i2715[12], i2715[13], 0, i2714, 'm_LightCookieSprite')
  request.r(i2715[14], i2715[15], 0, i2714, 'm_DeprecatedPointLightCookieSprite')
  i2714.m_LightOrder = i2715[16]
  i2714.m_AlphaBlendOnOverlap = !!i2715[17]
  i2714.m_OverlapOperation = i2715[18]
  i2714.m_NormalMapDistance = i2715[19]
  i2714.m_NormalMapQuality = i2715[20]
  i2714.m_UseNormalMap = !!i2715[21]
  i2714.m_ShadowIntensityEnabled = !!i2715[22]
  i2714.m_ShadowIntensity = i2715[23]
  i2714.m_ShadowVolumeIntensityEnabled = !!i2715[24]
  i2714.m_ShadowVolumeIntensity = i2715[25]
  i2714.m_PointLightInnerAngle = i2715[26]
  i2714.m_PointLightOuterAngle = i2715[27]
  i2714.m_PointLightInnerRadius = i2715[28]
  i2714.m_PointLightOuterRadius = i2715[29]
  i2714.m_ShapeLightParametricSides = i2715[30]
  i2714.m_ShapeLightParametricAngleOffset = i2715[31]
  i2714.m_ShapeLightParametricRadius = i2715[32]
  i2714.m_ShapeLightFalloffSize = i2715[33]
  i2714.m_ShapeLightFalloffOffset = new pc.Vec2( i2715[34], i2715[35] )
  var i2717 = i2715[36]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 3) {
    i2716.push( new pc.Vec3( i2717[i + 0], i2717[i + 1], i2717[i + 2] ) );
  }
  i2714.m_ShapePath = i2716
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'clip')
  request.r(i2721[2], i2721[3], 0, i2720, 'outputAudioMixerGroup')
  i2720.playOnAwake = !!i2721[4]
  i2720.loop = !!i2721[5]
  i2720.time = i2721[6]
  i2720.volume = i2721[7]
  i2720.pitch = i2721[8]
  i2720.enabled = !!i2721[9]
  return i2720
}

Deserializers["LoopGround"] = function (request, data, root) {
  var i2722 = root || request.c( 'LoopGround' )
  var i2723 = data
  i2722._speed = i2723[0]
  i2722._maxRangeX = i2723[1]
  return i2722
}

Deserializers["PipeSpawner"] = function (request, data, root) {
  var i2724 = root || request.c( 'PipeSpawner' )
  var i2725 = data
  i2724._maxTime = i2725[0]
  i2724._heightRange = i2725[1]
  request.r(i2725[2], i2725[3], 0, i2724, '_pipePrefab')
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2727 = data
  request.r(i2727[0], i2727[1], 0, i2726, 'animatorController')
  request.r(i2727[2], i2727[3], 0, i2726, 'avatar')
  i2726.updateMode = i2727[4]
  i2726.hasTransformHierarchy = !!i2727[5]
  i2726.applyRootMotion = !!i2727[6]
  var i2729 = i2727[7]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 2, i2728, '')
  }
  i2726.humanBones = i2728
  i2726.enabled = !!i2727[8]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2733 = data
  i2732.bodyType = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'material')
  i2732.simulated = !!i2733[3]
  i2732.useAutoMass = !!i2733[4]
  i2732.mass = i2733[5]
  i2732.drag = i2733[6]
  i2732.angularDrag = i2733[7]
  i2732.gravityScale = i2733[8]
  i2732.collisionDetectionMode = i2733[9]
  i2732.sleepMode = i2733[10]
  i2732.constraints = i2733[11]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i2735 = data
  i2734.size = new pc.Vec2( i2735[0], i2735[1] )
  i2734.direction = i2735[2]
  i2734.enabled = !!i2735[3]
  i2734.isTrigger = !!i2735[4]
  i2734.usedByEffector = !!i2735[5]
  i2734.density = i2735[6]
  i2734.offset = new pc.Vec2( i2735[7], i2735[8] )
  request.r(i2735[9], i2735[10], 0, i2734, 'material')
  return i2734
}

Deserializers["FlyBehavior"] = function (request, data, root) {
  var i2736 = root || request.c( 'FlyBehavior' )
  var i2737 = data
  i2736._velocity = i2737[0]
  i2736._rotationSpeed = i2737[1]
  i2736._idleFloatAmplitude = i2737[2]
  i2736._idleFloatFrequency = i2737[3]
  return i2736
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2738 = root || request.c( 'GameManager' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, '_gameOverCanvas')
  request.r(i2739[2], i2739[3], 0, i2738, '_ingameCanvas')
  request.r(i2739[4], i2739[5], 0, i2738, '_homeCanvas')
  var i2741 = i2739[6]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 1, i2740, '')
  }
  i2738._scoreText = i2740
  request.r(i2739[7], i2739[8], 0, i2738, '_audioSource')
  request.r(i2739[9], i2739[10], 0, i2738, '_hitClip')
  request.r(i2739[11], i2739[12], 0, i2738, '_scoreClip')
  request.r(i2739[13], i2739[14], 0, i2738, '_flyClip')
  request.r(i2739[15], i2739[16], 0, i2738, '_dieClip')
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2745 = data
  i2744.pivot = new pc.Vec2( i2745[0], i2745[1] )
  i2744.anchorMin = new pc.Vec2( i2745[2], i2745[3] )
  i2744.anchorMax = new pc.Vec2( i2745[4], i2745[5] )
  i2744.sizeDelta = new pc.Vec2( i2745[6], i2745[7] )
  i2744.anchoredPosition3D = new pc.Vec3( i2745[8], i2745[9], i2745[10] )
  i2744.rotation = new pc.Quat(i2745[11], i2745[12], i2745[13], i2745[14])
  i2744.scale = new pc.Vec3( i2745[15], i2745[16], i2745[17] )
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2747 = data
  i2746.planeDistance = i2747[0]
  i2746.referencePixelsPerUnit = i2747[1]
  i2746.isFallbackOverlay = !!i2747[2]
  i2746.renderMode = i2747[3]
  i2746.renderOrder = i2747[4]
  i2746.sortingLayerName = i2747[5]
  i2746.sortingOrder = i2747[6]
  i2746.scaleFactor = i2747[7]
  request.r(i2747[8], i2747[9], 0, i2746, 'worldCamera')
  i2746.overrideSorting = !!i2747[10]
  i2746.pixelPerfect = !!i2747[11]
  i2746.targetDisplay = i2747[12]
  i2746.overridePixelPerfect = !!i2747[13]
  i2746.enabled = !!i2747[14]
  return i2746
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2749 = data
  i2748.m_UiScaleMode = i2749[0]
  i2748.m_ReferencePixelsPerUnit = i2749[1]
  i2748.m_ScaleFactor = i2749[2]
  i2748.m_ReferenceResolution = new pc.Vec2( i2749[3], i2749[4] )
  i2748.m_ScreenMatchMode = i2749[5]
  i2748.m_MatchWidthOrHeight = i2749[6]
  i2748.m_PhysicalUnit = i2749[7]
  i2748.m_FallbackScreenDPI = i2749[8]
  i2748.m_DefaultSpriteDPI = i2749[9]
  i2748.m_DynamicPixelsPerUnit = i2749[10]
  i2748.m_PresetInfoIsWorld = !!i2749[11]
  return i2748
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2751 = data
  i2750.m_IgnoreReversedGraphics = !!i2751[0]
  i2750.m_BlockingObjects = i2751[1]
  i2750.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2751[2] )
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2753 = data
  i2752.cullTransparentMesh = !!i2753[0]
  return i2752
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2754 = root || request.c( 'UnityEngine.UI.Text' )
  var i2755 = data
  i2754.m_FontData = request.d('UnityEngine.UI.FontData', i2755[0], i2754.m_FontData)
  i2754.m_Text = i2755[1]
  request.r(i2755[2], i2755[3], 0, i2754, 'm_Material')
  i2754.m_Maskable = !!i2755[4]
  i2754.m_Color = new pc.Color(i2755[5], i2755[6], i2755[7], i2755[8])
  i2754.m_RaycastTarget = !!i2755[9]
  i2754.m_RaycastPadding = new pc.Vec4( i2755[10], i2755[11], i2755[12], i2755[13] )
  return i2754
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2756 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'm_Font')
  i2756.m_FontSize = i2757[2]
  i2756.m_FontStyle = i2757[3]
  i2756.m_BestFit = !!i2757[4]
  i2756.m_MinSize = i2757[5]
  i2756.m_MaxSize = i2757[6]
  i2756.m_Alignment = i2757[7]
  i2756.m_AlignByGeometry = !!i2757[8]
  i2756.m_RichText = !!i2757[9]
  i2756.m_HorizontalOverflow = i2757[10]
  i2756.m_VerticalOverflow = i2757[11]
  i2756.m_LineSpacing = i2757[12]
  return i2756
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2759 = data
  i2758.m_EffectColor = new pc.Color(i2759[0], i2759[1], i2759[2], i2759[3])
  i2758.m_EffectDistance = new pc.Vec2( i2759[4], i2759[5] )
  i2758.m_UseGraphicAlpha = !!i2759[6]
  return i2758
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2760 = root || request.c( 'UnityEngine.UI.Image' )
  var i2761 = data
  request.r(i2761[0], i2761[1], 0, i2760, 'm_Sprite')
  i2760.m_Type = i2761[2]
  i2760.m_PreserveAspect = !!i2761[3]
  i2760.m_FillCenter = !!i2761[4]
  i2760.m_FillMethod = i2761[5]
  i2760.m_FillAmount = i2761[6]
  i2760.m_FillClockwise = !!i2761[7]
  i2760.m_FillOrigin = i2761[8]
  i2760.m_UseSpriteMesh = !!i2761[9]
  i2760.m_PixelsPerUnitMultiplier = i2761[10]
  request.r(i2761[11], i2761[12], 0, i2760, 'm_Material')
  i2760.m_Maskable = !!i2761[13]
  i2760.m_Color = new pc.Color(i2761[14], i2761[15], i2761[16], i2761[17])
  i2760.m_RaycastTarget = !!i2761[18]
  i2760.m_RaycastPadding = new pc.Vec4( i2761[19], i2761[20], i2761[21], i2761[22] )
  return i2760
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2762 = root || request.c( 'UnityEngine.UI.Button' )
  var i2763 = data
  i2762.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2763[0], i2762.m_OnClick)
  i2762.m_Navigation = request.d('UnityEngine.UI.Navigation', i2763[1], i2762.m_Navigation)
  i2762.m_Transition = i2763[2]
  i2762.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2763[3], i2762.m_Colors)
  i2762.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2763[4], i2762.m_SpriteState)
  i2762.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2763[5], i2762.m_AnimationTriggers)
  i2762.m_Interactable = !!i2763[6]
  request.r(i2763[7], i2763[8], 0, i2762, 'm_TargetGraphic')
  return i2762
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2765 = data
  i2764.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2765[0], i2764.m_PersistentCalls)
  return i2764
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('UnityEngine.Events.PersistentCall', i2769[i + 0]));
  }
  i2766.m_Calls = i2768
  return i2766
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2773 = data
  request.r(i2773[0], i2773[1], 0, i2772, 'm_Target')
  i2772.m_TargetAssemblyTypeName = i2773[2]
  i2772.m_MethodName = i2773[3]
  i2772.m_Mode = i2773[4]
  i2772.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2773[5], i2772.m_Arguments)
  i2772.m_CallState = i2773[6]
  return i2772
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2775 = data
  request.r(i2775[0], i2775[1], 0, i2774, 'm_ObjectArgument')
  i2774.m_ObjectArgumentAssemblyTypeName = i2775[2]
  i2774.m_IntArgument = i2775[3]
  i2774.m_FloatArgument = i2775[4]
  i2774.m_StringArgument = i2775[5]
  i2774.m_BoolArgument = !!i2775[6]
  return i2774
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2776 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2777 = data
  i2776.m_Mode = i2777[0]
  i2776.m_WrapAround = !!i2777[1]
  request.r(i2777[2], i2777[3], 0, i2776, 'm_SelectOnUp')
  request.r(i2777[4], i2777[5], 0, i2776, 'm_SelectOnDown')
  request.r(i2777[6], i2777[7], 0, i2776, 'm_SelectOnLeft')
  request.r(i2777[8], i2777[9], 0, i2776, 'm_SelectOnRight')
  return i2776
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2778 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2779 = data
  i2778.m_NormalColor = new pc.Color(i2779[0], i2779[1], i2779[2], i2779[3])
  i2778.m_HighlightedColor = new pc.Color(i2779[4], i2779[5], i2779[6], i2779[7])
  i2778.m_PressedColor = new pc.Color(i2779[8], i2779[9], i2779[10], i2779[11])
  i2778.m_SelectedColor = new pc.Color(i2779[12], i2779[13], i2779[14], i2779[15])
  i2778.m_DisabledColor = new pc.Color(i2779[16], i2779[17], i2779[18], i2779[19])
  i2778.m_ColorMultiplier = i2779[20]
  i2778.m_FadeDuration = i2779[21]
  return i2778
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2781 = data
  request.r(i2781[0], i2781[1], 0, i2780, 'm_HighlightedSprite')
  request.r(i2781[2], i2781[3], 0, i2780, 'm_PressedSprite')
  request.r(i2781[4], i2781[5], 0, i2780, 'm_SelectedSprite')
  request.r(i2781[6], i2781[7], 0, i2780, 'm_DisabledSprite')
  return i2780
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2783 = data
  i2782.m_NormalTrigger = i2783[0]
  i2782.m_HighlightedTrigger = i2783[1]
  i2782.m_PressedTrigger = i2783[2]
  i2782.m_SelectedTrigger = i2783[3]
  i2782.m_DisabledTrigger = i2783[4]
  return i2782
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2785 = data
  request.r(i2785[0], i2785[1], 0, i2784, 'm_FirstSelected')
  i2784.m_sendNavigationEvents = !!i2785[2]
  i2784.m_DragThreshold = i2785[3]
  return i2784
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2787 = data
  i2786.m_HorizontalAxis = i2787[0]
  i2786.m_VerticalAxis = i2787[1]
  i2786.m_SubmitButton = i2787[2]
  i2786.m_CancelButton = i2787[3]
  i2786.m_InputActionsPerSecond = i2787[4]
  i2786.m_RepeatDelay = i2787[5]
  i2786.m_ForceModuleActive = !!i2787[6]
  i2786.m_SendPointerHoverToParent = !!i2787[7]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2789 = data
  i2788.ambientIntensity = i2789[0]
  i2788.reflectionIntensity = i2789[1]
  i2788.ambientMode = i2789[2]
  i2788.ambientLight = new pc.Color(i2789[3], i2789[4], i2789[5], i2789[6])
  i2788.ambientSkyColor = new pc.Color(i2789[7], i2789[8], i2789[9], i2789[10])
  i2788.ambientGroundColor = new pc.Color(i2789[11], i2789[12], i2789[13], i2789[14])
  i2788.ambientEquatorColor = new pc.Color(i2789[15], i2789[16], i2789[17], i2789[18])
  i2788.fogColor = new pc.Color(i2789[19], i2789[20], i2789[21], i2789[22])
  i2788.fogEndDistance = i2789[23]
  i2788.fogStartDistance = i2789[24]
  i2788.fogDensity = i2789[25]
  i2788.fog = !!i2789[26]
  request.r(i2789[27], i2789[28], 0, i2788, 'skybox')
  i2788.fogMode = i2789[29]
  var i2791 = i2789[30]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2791[i + 0]) );
  }
  i2788.lightmaps = i2790
  i2788.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2789[31], i2788.lightProbes)
  i2788.lightmapsMode = i2789[32]
  i2788.mixedBakeMode = i2789[33]
  i2788.environmentLightingMode = i2789[34]
  i2788.ambientProbe = new pc.SphericalHarmonicsL2(i2789[35])
  i2788.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2789[36])
  i2788.useReferenceAmbientProbe = !!i2789[37]
  request.r(i2789[38], i2789[39], 0, i2788, 'customReflection')
  request.r(i2789[40], i2789[41], 0, i2788, 'defaultReflection')
  i2788.defaultReflectionMode = i2789[42]
  i2788.defaultReflectionResolution = i2789[43]
  i2788.sunLightObjectId = i2789[44]
  i2788.pixelLightCount = i2789[45]
  i2788.defaultReflectionHDR = !!i2789[46]
  i2788.hasLightDataAsset = !!i2789[47]
  i2788.hasManualGenerate = !!i2789[48]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'lightmapColor')
  request.r(i2795[2], i2795[3], 0, i2794, 'lightmapDirection')
  request.r(i2795[4], i2795[5], 0, i2794, 'shadowMask')
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2796 = root || new UnityEngine.LightProbes()
  var i2797 = data
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2803 = data
  i2802.AdditionalLightsRenderingMode = i2803[0]
  i2802.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2803[1], i2802.LightRenderingMode)
  i2802.MainLightRenderingModeValue = i2803[2]
  i2802.SupportsMainLightShadows = !!i2803[3]
  i2802.MainLightShadowmapResolutionValue = i2803[4]
  i2802.SupportsSoftShadows = !!i2803[5]
  i2802.SoftShadowQualityValue = i2803[6]
  i2802.ShadowDistance = i2803[7]
  i2802.ShadowCascadeCount = i2803[8]
  i2802.Cascade2Split = i2803[9]
  i2802.Cascade3Split = new pc.Vec2( i2803[10], i2803[11] )
  i2802.Cascade4Split = new pc.Vec3( i2803[12], i2803[13], i2803[14] )
  i2802.CascadeBorder = i2803[15]
  i2802.ShadowDepthBias = i2803[16]
  i2802.ShadowNormalBias = i2803[17]
  i2802.RequireDepthTexture = !!i2803[18]
  i2802.RequireOpaqueTexture = !!i2803[19]
  i2802.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i2803[20], i2802.scriptableRendererData)
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2805 = data
  i2804.Disabled = i2805[0]
  i2804.PerVertex = i2805[1]
  i2804.PerPixel = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i2807 = data
  i2806.opaqueLayerMask = i2807[0]
  i2806.transparentLayerMask = i2807[1]
  var i2809 = i2807[2]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i2809[i + 0]) );
  }
  i2806.RenderObjectsFeatures = i2808
  i2806.name = i2807[3]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i2813 = data
  i2812.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i2813[0], i2812.settings)
  i2812.name = i2813[1]
  i2812.typeName = i2813[2]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2817[i + 0]));
  }
  i2814.ShaderCompilationErrors = i2816
  i2814.name = i2815[1]
  i2814.guid = i2815[2]
  var i2819 = i2815[3]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( i2819[i + 0] );
  }
  i2814.shaderDefinedKeywords = i2818
  var i2821 = i2815[4]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2821[i + 0]) );
  }
  i2814.passes = i2820
  var i2823 = i2815[5]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2823[i + 0]) );
  }
  i2814.usePasses = i2822
  var i2825 = i2815[6]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2825[i + 0]) );
  }
  i2814.defaultParameterValues = i2824
  request.r(i2815[7], i2815[8], 0, i2814, 'unityFallbackShader')
  i2814.readDepth = !!i2815[9]
  i2814.hasDepthOnlyPass = !!i2815[10]
  i2814.isCreatedByShaderGraph = !!i2815[11]
  i2814.disableBatching = !!i2815[12]
  i2814.compiled = !!i2815[13]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2829 = data
  i2828.shaderName = i2829[0]
  i2828.errorMessage = i2829[1]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2834 = root || new pc.UnityShaderPass()
  var i2835 = data
  i2834.id = i2835[0]
  i2834.subShaderIndex = i2835[1]
  i2834.name = i2835[2]
  i2834.passType = i2835[3]
  i2834.grabPassTextureName = i2835[4]
  i2834.usePass = !!i2835[5]
  i2834.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[6], i2834.zTest)
  i2834.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[7], i2834.zWrite)
  i2834.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[8], i2834.culling)
  i2834.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2835[9], i2834.blending)
  i2834.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2835[10], i2834.alphaBlending)
  i2834.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[11], i2834.colorWriteMask)
  i2834.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[12], i2834.offsetUnits)
  i2834.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[13], i2834.offsetFactor)
  i2834.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[14], i2834.stencilRef)
  i2834.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[15], i2834.stencilReadMask)
  i2834.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2835[16], i2834.stencilWriteMask)
  i2834.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2835[17], i2834.stencilOp)
  i2834.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2835[18], i2834.stencilOpFront)
  i2834.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2835[19], i2834.stencilOpBack)
  var i2837 = i2835[20]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2837[i + 0]) );
  }
  i2834.tags = i2836
  var i2839 = i2835[21]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2834.passDefinedKeywords = i2838
  var i2841 = i2835[22]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2841[i + 0]) );
  }
  i2834.passDefinedKeywordGroups = i2840
  var i2843 = i2835[23]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2843[i + 0]) );
  }
  i2834.variants = i2842
  var i2845 = i2835[24]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2845[i + 0]) );
  }
  i2834.excludedVariants = i2844
  i2834.hasDepthReader = !!i2835[25]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2847 = data
  i2846.val = i2847[0]
  i2846.name = i2847[1]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2849 = data
  i2848.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[0], i2848.src)
  i2848.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[1], i2848.dst)
  i2848.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2849[2], i2848.op)
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2851 = data
  i2850.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2851[0], i2850.pass)
  i2850.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2851[1], i2850.fail)
  i2850.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2851[2], i2850.zFail)
  i2850.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2851[3], i2850.comp)
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2855 = data
  i2854.name = i2855[0]
  i2854.value = i2855[1]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2859 = data
  var i2861 = i2859[0]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( i2861[i + 0] );
  }
  i2858.keywords = i2860
  i2858.hasDiscard = !!i2859[1]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2865 = data
  i2864.passId = i2865[0]
  i2864.subShaderIndex = i2865[1]
  var i2867 = i2865[2]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( i2867[i + 0] );
  }
  i2864.keywords = i2866
  i2864.vertexProgram = i2865[3]
  i2864.fragmentProgram = i2865[4]
  i2864.exportedForWebGl2 = !!i2865[5]
  i2864.readDepth = !!i2865[6]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'shader')
  i2870.pass = i2871[2]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.type = i2875[1]
  i2874.value = new pc.Vec4( i2875[2], i2875[3], i2875[4], i2875[5] )
  i2874.textureValue = i2875[6]
  i2874.shaderPropertyFlag = i2875[7]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2877 = data
  i2876.name = i2877[0]
  request.r(i2877[1], i2877[2], 0, i2876, 'texture')
  i2876.aabb = i2877[3]
  i2876.vertices = i2877[4]
  i2876.triangles = i2877[5]
  i2876.textureRect = UnityEngine.Rect.MinMaxRect(i2877[6], i2877[7], i2877[8], i2877[9])
  i2876.packedRect = UnityEngine.Rect.MinMaxRect(i2877[10], i2877[11], i2877[12], i2877[13])
  i2876.border = new pc.Vec4( i2877[14], i2877[15], i2877[16], i2877[17] )
  i2876.transparency = i2877[18]
  i2876.bounds = i2877[19]
  i2876.pixelsPerUnit = i2877[20]
  i2876.textureWidth = i2877[21]
  i2876.textureHeight = i2877[22]
  i2876.nativeSize = new pc.Vec2( i2877[23], i2877[24] )
  i2876.pivot = new pc.Vec2( i2877[25], i2877[26] )
  i2876.textureRectOffset = new pc.Vec2( i2877[27], i2877[28] )
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2879 = data
  i2878.name = i2879[0]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2881 = data
  i2880.name = i2881[0]
  i2880.wrapMode = i2881[1]
  i2880.isLooping = !!i2881[2]
  i2880.length = i2881[3]
  var i2883 = i2881[4]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2883[i + 0]) );
  }
  i2880.curves = i2882
  var i2885 = i2881[5]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2885[i + 0]) );
  }
  i2880.events = i2884
  i2880.halfPrecision = !!i2881[6]
  i2880._frameRate = i2881[7]
  i2880.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2881[8], i2880.localBounds)
  i2880.hasMuscleCurves = !!i2881[9]
  var i2887 = i2881[10]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2880.clipMuscleConstant = i2886
  i2880.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2881[11], i2880.clipBindingConstant)
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2891 = data
  i2890.path = i2891[0]
  i2890.hash = i2891[1]
  i2890.componentType = i2891[2]
  i2890.property = i2891[3]
  i2890.keys = i2891[4]
  var i2893 = i2891[5]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2893[i + 0]) );
  }
  i2890.objectReferenceKeys = i2892
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2897 = data
  i2896.time = i2897[0]
  request.r(i2897[1], i2897[2], 0, i2896, 'value')
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2901 = data
  i2900.functionName = i2901[0]
  i2900.floatParameter = i2901[1]
  i2900.intParameter = i2901[2]
  i2900.stringParameter = i2901[3]
  request.r(i2901[4], i2901[5], 0, i2900, 'objectReferenceParameter')
  i2900.time = i2901[6]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2903 = data
  i2902.center = new pc.Vec3( i2903[0], i2903[1], i2903[2] )
  i2902.extends = new pc.Vec3( i2903[3], i2903[4], i2903[5] )
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2907 = data
  var i2909 = i2907[0]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( i2909[i + 0] );
  }
  i2906.genericBindings = i2908
  var i2911 = i2907[1]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( i2911[i + 0] );
  }
  i2906.pptrCurveMapping = i2910
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2913 = data
  i2912.name = i2913[0]
  i2912.ascent = i2913[1]
  i2912.originalLineHeight = i2913[2]
  i2912.fontSize = i2913[3]
  var i2915 = i2913[4]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2915[i + 0]) );
  }
  i2912.characterInfo = i2914
  request.r(i2913[5], i2913[6], 0, i2912, 'texture')
  i2912.originalFontSize = i2913[7]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2919 = data
  i2918.index = i2919[0]
  i2918.advance = i2919[1]
  i2918.bearing = i2919[2]
  i2918.glyphWidth = i2919[3]
  i2918.glyphHeight = i2919[4]
  i2918.minX = i2919[5]
  i2918.maxX = i2919[6]
  i2918.minY = i2919[7]
  i2918.maxY = i2919[8]
  i2918.uvBottomLeftX = i2919[9]
  i2918.uvBottomLeftY = i2919[10]
  i2918.uvBottomRightX = i2919[11]
  i2918.uvBottomRightY = i2919[12]
  i2918.uvTopLeftX = i2919[13]
  i2918.uvTopLeftY = i2919[14]
  i2918.uvTopRightX = i2919[15]
  i2918.uvTopRightY = i2919[16]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2921 = data
  i2920.name = i2921[0]
  var i2923 = i2921[1]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2923[i + 0]) );
  }
  i2920.layers = i2922
  var i2925 = i2921[2]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2925[i + 0]) );
  }
  i2920.parameters = i2924
  i2920.animationClips = i2921[3]
  i2920.avatarUnsupported = i2921[4]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2929 = data
  i2928.name = i2929[0]
  i2928.defaultWeight = i2929[1]
  i2928.blendingMode = i2929[2]
  i2928.avatarMask = i2929[3]
  i2928.syncedLayerIndex = i2929[4]
  i2928.syncedLayerAffectsTiming = !!i2929[5]
  i2928.syncedLayers = i2929[6]
  i2928.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2929[7], i2928.stateMachine)
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2931 = data
  i2930.id = i2931[0]
  i2930.name = i2931[1]
  i2930.path = i2931[2]
  var i2933 = i2931[3]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2933[i + 0]) );
  }
  i2930.states = i2932
  var i2935 = i2931[4]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2935[i + 0]) );
  }
  i2930.machines = i2934
  var i2937 = i2931[5]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2937[i + 0]) );
  }
  i2930.entryStateTransitions = i2936
  var i2939 = i2931[6]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2939[i + 0]) );
  }
  i2930.exitStateTransitions = i2938
  var i2941 = i2931[7]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2941[i + 0]) );
  }
  i2930.anyStateTransitions = i2940
  i2930.defaultStateId = i2931[8]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2945 = data
  i2944.id = i2945[0]
  i2944.name = i2945[1]
  i2944.cycleOffset = i2945[2]
  i2944.cycleOffsetParameter = i2945[3]
  i2944.cycleOffsetParameterActive = !!i2945[4]
  i2944.mirror = !!i2945[5]
  i2944.mirrorParameter = i2945[6]
  i2944.mirrorParameterActive = !!i2945[7]
  i2944.motionId = i2945[8]
  i2944.nameHash = i2945[9]
  i2944.fullPathHash = i2945[10]
  i2944.speed = i2945[11]
  i2944.speedParameter = i2945[12]
  i2944.speedParameterActive = !!i2945[13]
  i2944.tag = i2945[14]
  i2944.tagHash = i2945[15]
  i2944.writeDefaultValues = !!i2945[16]
  var i2947 = i2945[17]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2944.behaviours = i2946
  var i2949 = i2945[18]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2949[i + 0]) );
  }
  i2944.transitions = i2948
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2955 = data
  i2954.fullPath = i2955[0]
  i2954.canTransitionToSelf = !!i2955[1]
  i2954.duration = i2955[2]
  i2954.exitTime = i2955[3]
  i2954.hasExitTime = !!i2955[4]
  i2954.hasFixedDuration = !!i2955[5]
  i2954.interruptionSource = i2955[6]
  i2954.offset = i2955[7]
  i2954.orderedInterruption = !!i2955[8]
  i2954.destinationStateId = i2955[9]
  i2954.isExit = !!i2955[10]
  i2954.mute = !!i2955[11]
  i2954.solo = !!i2955[12]
  var i2957 = i2955[13]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2957[i + 0]) );
  }
  i2954.conditions = i2956
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2963 = data
  i2962.destinationStateId = i2963[0]
  i2962.isExit = !!i2963[1]
  i2962.mute = !!i2963[2]
  i2962.solo = !!i2963[3]
  var i2965 = i2963[4]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2965[i + 0]) );
  }
  i2962.conditions = i2964
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2969 = data
  i2968.defaultBool = !!i2969[0]
  i2968.defaultFloat = i2969[1]
  i2968.defaultInt = i2969[2]
  i2968.name = i2969[3]
  i2968.nameHash = i2969[4]
  i2968.type = i2969[5]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.bytes64 = i2971[1]
  i2970.data = i2971[2]
  return i2970
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2972 = root || request.c( 'TMPro.TMP_Settings' )
  var i2973 = data
  i2972.m_enableWordWrapping = !!i2973[0]
  i2972.m_enableKerning = !!i2973[1]
  i2972.m_enableExtraPadding = !!i2973[2]
  i2972.m_enableTintAllSprites = !!i2973[3]
  i2972.m_enableParseEscapeCharacters = !!i2973[4]
  i2972.m_EnableRaycastTarget = !!i2973[5]
  i2972.m_GetFontFeaturesAtRuntime = !!i2973[6]
  i2972.m_missingGlyphCharacter = i2973[7]
  i2972.m_warningsDisabled = !!i2973[8]
  request.r(i2973[9], i2973[10], 0, i2972, 'm_defaultFontAsset')
  i2972.m_defaultFontAssetPath = i2973[11]
  i2972.m_defaultFontSize = i2973[12]
  i2972.m_defaultAutoSizeMinRatio = i2973[13]
  i2972.m_defaultAutoSizeMaxRatio = i2973[14]
  i2972.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2973[15], i2973[16] )
  i2972.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2973[17], i2973[18] )
  i2972.m_autoSizeTextContainer = !!i2973[19]
  i2972.m_IsTextObjectScaleStatic = !!i2973[20]
  var i2975 = i2973[21]
  var i2974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 1, i2974, '')
  }
  i2972.m_fallbackFontAssets = i2974
  i2972.m_matchMaterialPreset = !!i2973[22]
  request.r(i2973[23], i2973[24], 0, i2972, 'm_defaultSpriteAsset')
  i2972.m_defaultSpriteAssetPath = i2973[25]
  i2972.m_enableEmojiSupport = !!i2973[26]
  i2972.m_MissingCharacterSpriteUnicode = i2973[27]
  i2972.m_defaultColorGradientPresetsPath = i2973[28]
  request.r(i2973[29], i2973[30], 0, i2972, 'm_defaultStyleSheet')
  i2972.m_StyleSheetsResourcePath = i2973[31]
  request.r(i2973[32], i2973[33], 0, i2972, 'm_leadingCharacters')
  request.r(i2973[34], i2973[35], 0, i2972, 'm_followingCharacters')
  i2972.m_UseModernHangulLineBreakingRules = !!i2973[36]
  return i2972
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2978 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2979 = data
  request.r(i2979[0], i2979[1], 0, i2978, 'atlas')
  i2978.normalStyle = i2979[2]
  i2978.normalSpacingOffset = i2979[3]
  i2978.boldStyle = i2979[4]
  i2978.boldSpacing = i2979[5]
  i2978.italicStyle = i2979[6]
  i2978.tabSize = i2979[7]
  i2978.hashCode = i2979[8]
  request.r(i2979[9], i2979[10], 0, i2978, 'material')
  i2978.materialHashCode = i2979[11]
  i2978.m_Version = i2979[12]
  i2978.m_SourceFontFileGUID = i2979[13]
  request.r(i2979[14], i2979[15], 0, i2978, 'm_SourceFontFile_EditorRef')
  request.r(i2979[16], i2979[17], 0, i2978, 'm_SourceFontFile')
  i2978.m_AtlasPopulationMode = i2979[18]
  i2978.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2979[19], i2978.m_FaceInfo)
  var i2981 = i2979[20]
  var i2980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.add(request.d('UnityEngine.TextCore.Glyph', i2981[i + 0]));
  }
  i2978.m_GlyphTable = i2980
  var i2983 = i2979[21]
  var i2982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.add(request.d('TMPro.TMP_Character', i2983[i + 0]));
  }
  i2978.m_CharacterTable = i2982
  var i2985 = i2979[22]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 2) {
  request.r(i2985[i + 0], i2985[i + 1], 2, i2984, '')
  }
  i2978.m_AtlasTextures = i2984
  i2978.m_AtlasTextureIndex = i2979[23]
  i2978.m_IsMultiAtlasTexturesEnabled = !!i2979[24]
  i2978.m_ClearDynamicDataOnBuild = !!i2979[25]
  var i2987 = i2979[26]
  var i2986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.add(request.d('UnityEngine.TextCore.GlyphRect', i2987[i + 0]));
  }
  i2978.m_UsedGlyphRects = i2986
  var i2989 = i2979[27]
  var i2988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.add(request.d('UnityEngine.TextCore.GlyphRect', i2989[i + 0]));
  }
  i2978.m_FreeGlyphRects = i2988
  i2978.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2979[28], i2978.m_fontInfo)
  i2978.m_AtlasWidth = i2979[29]
  i2978.m_AtlasHeight = i2979[30]
  i2978.m_AtlasPadding = i2979[31]
  i2978.m_AtlasRenderMode = i2979[32]
  var i2991 = i2979[33]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('TMPro.TMP_Glyph', i2991[i + 0]));
  }
  i2978.m_glyphInfoList = i2990
  i2978.m_KerningTable = request.d('TMPro.KerningTable', i2979[34], i2978.m_KerningTable)
  i2978.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2979[35], i2978.m_FontFeatureTable)
  var i2993 = i2979[36]
  var i2992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 1, i2992, '')
  }
  i2978.fallbackFontAssets = i2992
  var i2995 = i2979[37]
  var i2994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2995.length; i += 2) {
  request.r(i2995[i + 0], i2995[i + 1], 1, i2994, '')
  }
  i2978.m_FallbackFontAssetTable = i2994
  i2978.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2979[38], i2978.m_CreationSettings)
  var i2997 = i2979[39]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( request.d('TMPro.TMP_FontWeightPair', i2997[i + 0]) );
  }
  i2978.m_FontWeightTable = i2996
  var i2999 = i2979[40]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('TMPro.TMP_FontWeightPair', i2999[i + 0]) );
  }
  i2978.fontWeights = i2998
  return i2978
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3001 = data
  i3000.m_FaceIndex = i3001[0]
  i3000.m_FamilyName = i3001[1]
  i3000.m_StyleName = i3001[2]
  i3000.m_PointSize = i3001[3]
  i3000.m_Scale = i3001[4]
  i3000.m_UnitsPerEM = i3001[5]
  i3000.m_LineHeight = i3001[6]
  i3000.m_AscentLine = i3001[7]
  i3000.m_CapLine = i3001[8]
  i3000.m_MeanLine = i3001[9]
  i3000.m_Baseline = i3001[10]
  i3000.m_DescentLine = i3001[11]
  i3000.m_SuperscriptOffset = i3001[12]
  i3000.m_SuperscriptSize = i3001[13]
  i3000.m_SubscriptOffset = i3001[14]
  i3000.m_SubscriptSize = i3001[15]
  i3000.m_UnderlineOffset = i3001[16]
  i3000.m_UnderlineThickness = i3001[17]
  i3000.m_StrikethroughOffset = i3001[18]
  i3000.m_StrikethroughThickness = i3001[19]
  i3000.m_TabWidth = i3001[20]
  return i3000
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3005 = data
  i3004.m_Index = i3005[0]
  i3004.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3005[1], i3004.m_Metrics)
  i3004.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3005[2], i3004.m_GlyphRect)
  i3004.m_Scale = i3005[3]
  i3004.m_AtlasIndex = i3005[4]
  i3004.m_ClassDefinitionType = i3005[5]
  return i3004
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3007 = data
  i3006.m_Width = i3007[0]
  i3006.m_Height = i3007[1]
  i3006.m_HorizontalBearingX = i3007[2]
  i3006.m_HorizontalBearingY = i3007[3]
  i3006.m_HorizontalAdvance = i3007[4]
  return i3006
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3009 = data
  i3008.m_X = i3009[0]
  i3008.m_Y = i3009[1]
  i3008.m_Width = i3009[2]
  i3008.m_Height = i3009[3]
  return i3008
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3012 = root || request.c( 'TMPro.TMP_Character' )
  var i3013 = data
  i3012.m_ElementType = i3013[0]
  i3012.m_Unicode = i3013[1]
  i3012.m_GlyphIndex = i3013[2]
  i3012.m_Scale = i3013[3]
  return i3012
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3019 = data
  i3018.Name = i3019[0]
  i3018.PointSize = i3019[1]
  i3018.Scale = i3019[2]
  i3018.CharacterCount = i3019[3]
  i3018.LineHeight = i3019[4]
  i3018.Baseline = i3019[5]
  i3018.Ascender = i3019[6]
  i3018.CapHeight = i3019[7]
  i3018.Descender = i3019[8]
  i3018.CenterLine = i3019[9]
  i3018.SuperscriptOffset = i3019[10]
  i3018.SubscriptOffset = i3019[11]
  i3018.SubSize = i3019[12]
  i3018.Underline = i3019[13]
  i3018.UnderlineThickness = i3019[14]
  i3018.strikethrough = i3019[15]
  i3018.strikethroughThickness = i3019[16]
  i3018.TabWidth = i3019[17]
  i3018.Padding = i3019[18]
  i3018.AtlasWidth = i3019[19]
  i3018.AtlasHeight = i3019[20]
  return i3018
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3022 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3023 = data
  i3022.id = i3023[0]
  i3022.x = i3023[1]
  i3022.y = i3023[2]
  i3022.width = i3023[3]
  i3022.height = i3023[4]
  i3022.xOffset = i3023[5]
  i3022.yOffset = i3023[6]
  i3022.xAdvance = i3023[7]
  i3022.scale = i3023[8]
  return i3022
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3024 = root || request.c( 'TMPro.KerningTable' )
  var i3025 = data
  var i3027 = i3025[0]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.add(request.d('TMPro.KerningPair', i3027[i + 0]));
  }
  i3024.kerningPairs = i3026
  return i3024
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3030 = root || request.c( 'TMPro.KerningPair' )
  var i3031 = data
  i3030.xOffset = i3031[0]
  i3030.m_FirstGlyph = i3031[1]
  i3030.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3031[2], i3030.m_FirstGlyphAdjustments)
  i3030.m_SecondGlyph = i3031[3]
  i3030.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3031[4], i3030.m_SecondGlyphAdjustments)
  i3030.m_IgnoreSpacingAdjustments = !!i3031[5]
  return i3030
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3032 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3033 = data
  var i3035 = i3033[0]
  var i3034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3035[i + 0]));
  }
  i3032.m_GlyphPairAdjustmentRecords = i3034
  return i3032
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3038 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3039 = data
  i3038.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3039[0], i3038.m_FirstAdjustmentRecord)
  i3038.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3039[1], i3038.m_SecondAdjustmentRecord)
  i3038.m_FeatureLookupFlags = i3039[2]
  return i3038
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3040 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3041 = data
  i3040.m_GlyphIndex = i3041[0]
  i3040.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3041[1], i3040.m_GlyphValueRecord)
  return i3040
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3042 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3043 = data
  i3042.m_XPlacement = i3043[0]
  i3042.m_YPlacement = i3043[1]
  i3042.m_XAdvance = i3043[2]
  i3042.m_YAdvance = i3043[3]
  return i3042
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3044 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3045 = data
  i3044.sourceFontFileName = i3045[0]
  i3044.sourceFontFileGUID = i3045[1]
  i3044.pointSizeSamplingMode = i3045[2]
  i3044.pointSize = i3045[3]
  i3044.padding = i3045[4]
  i3044.packingMode = i3045[5]
  i3044.atlasWidth = i3045[6]
  i3044.atlasHeight = i3045[7]
  i3044.characterSetSelectionMode = i3045[8]
  i3044.characterSequence = i3045[9]
  i3044.referencedFontAssetGUID = i3045[10]
  i3044.referencedTextAssetGUID = i3045[11]
  i3044.fontStyle = i3045[12]
  i3044.fontStyleModifier = i3045[13]
  i3044.renderMode = i3045[14]
  i3044.includeFontFeatures = !!i3045[15]
  return i3044
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3048 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'regularTypeface')
  request.r(i3049[2], i3049[3], 0, i3048, 'italicTypeface')
  return i3048
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3050 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3051 = data
  request.r(i3051[0], i3051[1], 0, i3050, 'spriteSheet')
  var i3053 = i3051[2]
  var i3052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.add(request.d('TMPro.TMP_Sprite', i3053[i + 0]));
  }
  i3050.spriteInfoList = i3052
  var i3055 = i3051[3]
  var i3054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 1, i3054, '')
  }
  i3050.fallbackSpriteAssets = i3054
  i3050.hashCode = i3051[4]
  request.r(i3051[5], i3051[6], 0, i3050, 'material')
  i3050.materialHashCode = i3051[7]
  i3050.m_Version = i3051[8]
  i3050.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3051[9], i3050.m_FaceInfo)
  var i3057 = i3051[10]
  var i3056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.add(request.d('TMPro.TMP_SpriteCharacter', i3057[i + 0]));
  }
  i3050.m_SpriteCharacterTable = i3056
  var i3059 = i3051[11]
  var i3058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.add(request.d('TMPro.TMP_SpriteGlyph', i3059[i + 0]));
  }
  i3050.m_SpriteGlyphTable = i3058
  return i3050
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3062 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3063 = data
  i3062.name = i3063[0]
  i3062.hashCode = i3063[1]
  i3062.unicode = i3063[2]
  i3062.pivot = new pc.Vec2( i3063[3], i3063[4] )
  request.r(i3063[5], i3063[6], 0, i3062, 'sprite')
  i3062.id = i3063[7]
  i3062.x = i3063[8]
  i3062.y = i3063[9]
  i3062.width = i3063[10]
  i3062.height = i3063[11]
  i3062.xOffset = i3063[12]
  i3062.yOffset = i3063[13]
  i3062.xAdvance = i3063[14]
  i3062.scale = i3063[15]
  return i3062
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3069 = data
  i3068.m_Name = i3069[0]
  i3068.m_HashCode = i3069[1]
  i3068.m_ElementType = i3069[2]
  i3068.m_Unicode = i3069[3]
  i3068.m_GlyphIndex = i3069[4]
  i3068.m_Scale = i3069[5]
  return i3068
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3072 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3073 = data
  request.r(i3073[0], i3073[1], 0, i3072, 'sprite')
  i3072.m_Index = i3073[2]
  i3072.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3073[3], i3072.m_Metrics)
  i3072.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3073[4], i3072.m_GlyphRect)
  i3072.m_Scale = i3073[5]
  i3072.m_AtlasIndex = i3073[6]
  i3072.m_ClassDefinitionType = i3073[7]
  return i3072
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3074 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.add(request.d('TMPro.TMP_Style', i3077[i + 0]));
  }
  i3074.m_StyleList = i3076
  return i3074
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3080 = root || request.c( 'TMPro.TMP_Style' )
  var i3081 = data
  i3080.m_Name = i3081[0]
  i3080.m_HashCode = i3081[1]
  i3080.m_OpeningDefinition = i3081[2]
  i3080.m_ClosingDefinition = i3081[3]
  i3080.m_OpeningTagArray = i3081[4]
  i3080.m_ClosingTagArray = i3081[5]
  i3080.m_OpeningTagUnicodeArray = i3081[6]
  i3080.m_ClosingTagUnicodeArray = i3081[7]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3083 = data
  var i3085 = i3083[0]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3085[i + 0]) );
  }
  i3082.files = i3084
  i3082.componentToPrefabIds = i3083[1]
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3089 = data
  i3088.path = i3089[0]
  request.r(i3089[1], i3089[2], 0, i3088, 'unityObject')
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3091 = data
  var i3093 = i3091[0]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3093[i + 0]) );
  }
  i3090.scriptsExecutionOrder = i3092
  var i3095 = i3091[1]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3095[i + 0]) );
  }
  i3090.sortingLayers = i3094
  var i3097 = i3091[2]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3097[i + 0]) );
  }
  i3090.cullingLayers = i3096
  i3090.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3091[3], i3090.timeSettings)
  i3090.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3091[4], i3090.physicsSettings)
  i3090.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3091[5], i3090.physics2DSettings)
  i3090.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3091[6], i3090.qualitySettings)
  i3090.enableRealtimeShadows = !!i3091[7]
  i3090.enableAutoInstancing = !!i3091[8]
  i3090.enableStaticBatching = !!i3091[9]
  i3090.enableDynamicBatching = !!i3091[10]
  i3090.lightmapEncodingQuality = i3091[11]
  i3090.desiredColorSpace = i3091[12]
  var i3099 = i3091[13]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( i3099[i + 0] );
  }
  i3090.allTags = i3098
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3103 = data
  i3102.name = i3103[0]
  i3102.value = i3103[1]
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3107 = data
  i3106.id = i3107[0]
  i3106.name = i3107[1]
  i3106.value = i3107[2]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3111 = data
  i3110.id = i3111[0]
  i3110.name = i3111[1]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3113 = data
  i3112.fixedDeltaTime = i3113[0]
  i3112.maximumDeltaTime = i3113[1]
  i3112.timeScale = i3113[2]
  i3112.maximumParticleTimestep = i3113[3]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3115 = data
  i3114.gravity = new pc.Vec3( i3115[0], i3115[1], i3115[2] )
  i3114.defaultSolverIterations = i3115[3]
  i3114.bounceThreshold = i3115[4]
  i3114.autoSyncTransforms = !!i3115[5]
  i3114.autoSimulation = !!i3115[6]
  var i3117 = i3115[7]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3117[i + 0]) );
  }
  i3114.collisionMatrix = i3116
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3121 = data
  i3120.enabled = !!i3121[0]
  i3120.layerId = i3121[1]
  i3120.otherLayerId = i3121[2]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3123 = data
  request.r(i3123[0], i3123[1], 0, i3122, 'material')
  i3122.gravity = new pc.Vec2( i3123[2], i3123[3] )
  i3122.positionIterations = i3123[4]
  i3122.velocityIterations = i3123[5]
  i3122.velocityThreshold = i3123[6]
  i3122.maxLinearCorrection = i3123[7]
  i3122.maxAngularCorrection = i3123[8]
  i3122.maxTranslationSpeed = i3123[9]
  i3122.maxRotationSpeed = i3123[10]
  i3122.baumgarteScale = i3123[11]
  i3122.baumgarteTOIScale = i3123[12]
  i3122.timeToSleep = i3123[13]
  i3122.linearSleepTolerance = i3123[14]
  i3122.angularSleepTolerance = i3123[15]
  i3122.defaultContactOffset = i3123[16]
  i3122.autoSimulation = !!i3123[17]
  i3122.queriesHitTriggers = !!i3123[18]
  i3122.queriesStartInColliders = !!i3123[19]
  i3122.callbacksOnDisable = !!i3123[20]
  i3122.reuseCollisionCallbacks = !!i3123[21]
  i3122.autoSyncTransforms = !!i3123[22]
  var i3125 = i3123[23]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3125[i + 0]) );
  }
  i3122.collisionMatrix = i3124
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3129 = data
  i3128.enabled = !!i3129[0]
  i3128.layerId = i3129[1]
  i3128.otherLayerId = i3129[2]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3131 = data
  var i3133 = i3131[0]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3133[i + 0]) );
  }
  i3130.qualityLevels = i3132
  var i3135 = i3131[1]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.push( i3135[i + 0] );
  }
  i3130.names = i3134
  i3130.shadows = i3131[2]
  i3130.anisotropicFiltering = i3131[3]
  i3130.antiAliasing = i3131[4]
  i3130.lodBias = i3131[5]
  i3130.shadowCascades = i3131[6]
  i3130.shadowDistance = i3131[7]
  i3130.shadowmaskMode = i3131[8]
  i3130.shadowProjection = i3131[9]
  i3130.shadowResolution = i3131[10]
  i3130.softParticles = !!i3131[11]
  i3130.softVegetation = !!i3131[12]
  i3130.activeColorSpace = i3131[13]
  i3130.desiredColorSpace = i3131[14]
  i3130.masterTextureLimit = i3131[15]
  i3130.maxQueuedFrames = i3131[16]
  i3130.particleRaycastBudget = i3131[17]
  i3130.pixelLightCount = i3131[18]
  i3130.realtimeReflectionProbes = !!i3131[19]
  i3130.shadowCascade2Split = i3131[20]
  i3130.shadowCascade4Split = new pc.Vec3( i3131[21], i3131[22], i3131[23] )
  i3130.streamingMipmapsActive = !!i3131[24]
  i3130.vSyncCount = i3131[25]
  i3130.asyncUploadBufferSize = i3131[26]
  i3130.asyncUploadTimeSlice = i3131[27]
  i3130.billboardsFaceCameraPosition = !!i3131[28]
  i3130.shadowNearPlaneOffset = i3131[29]
  i3130.streamingMipmapsMemoryBudget = i3131[30]
  i3130.maximumLODLevel = i3131[31]
  i3130.streamingMipmapsAddAllCameras = !!i3131[32]
  i3130.streamingMipmapsMaxLevelReduction = i3131[33]
  i3130.streamingMipmapsRenderersPerFrame = i3131[34]
  i3130.resolutionScalingFixedDPIFactor = i3131[35]
  i3130.streamingMipmapsMaxFileIORequests = i3131[36]
  i3130.currentQualityLevel = i3131[37]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i3139 = data
  i3138.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3139[0], i3138.Event)
  i3138.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i3139[1], i3138.filterSettings)
  i3138.overrideMaterialId = i3139[2]
  i3138.overrideMaterialPassIndex = i3139[3]
  i3138.overrideShaderId = i3139[4]
  i3138.overrideShaderPassIndex = i3139[5]
  i3138.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3139[6], i3138.overrideMode)
  i3138.overrideDepthState = !!i3139[7]
  i3138.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3139[8], i3138.depthCompareFunction)
  i3138.enableWrite = !!i3139[9]
  i3138.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i3139[10], i3138.stencilSettings)
  i3138.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i3139[11], i3138.cameraSettings)
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3143 = data
  i3142.mode = i3143[0]
  i3142.parameter = i3143[1]
  i3142.threshold = i3143[2]
  return i3142
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3144 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3145 = data
  i3144.xPlacement = i3145[0]
  i3144.yPlacement = i3145[1]
  i3144.xAdvance = i3145[2]
  i3144.yAdvance = i3145[3]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i3147 = data
  i3146.Value = i3147[0]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i3149 = data
  i3148.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3149[0], i3148.RenderQueueType)
  i3148.LayerMask = i3149[1]
  var i3151 = i3149[2]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( i3151[i + 0] );
  }
  i3148.PassNames = i3150
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i3153 = data
  i3152.overrideStencilState = !!i3153[0]
  i3152.stencilReference = i3153[1]
  i3152.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3153[2], i3152.stencilCompareFunctionValue)
  i3152.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3153[3], i3152.passOperationValue)
  i3152.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3153[4], i3152.failOperationValue)
  i3152.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3153[5], i3152.zFailOperationValue)
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i3155 = data
  i3154.overrideCamera = !!i3155[0]
  i3154.restoreCamera = !!i3155[1]
  i3154.offset = new pc.Vec4( i3155[2], i3155[3], i3155[4], i3155[5] )
  i3154.cameraFieldOfView = i3155[6]
  return i3154
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[8],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[19],"62":[19],"63":[19],"64":[19],"65":[19],"66":[19],"67":[19],"68":[19],"69":[19],"70":[19],"71":[19],"72":[19],"73":[19],"74":[8],"75":[76],"77":[78],"79":[78],"26":[25],"80":[25],"81":[8],"10":[8],"82":[83],"84":[85],"86":[25],"87":[25],"29":[26],"33":[30,25],"88":[25],"28":[26],"89":[25],"90":[25],"91":[25],"92":[25],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[30,25],"99":[25],"100":[25],"101":[25],"102":[25],"23":[30,25],"103":[25],"104":[35],"105":[35],"36":[35],"106":[35],"107":[8],"108":[8],"109":[85],"110":[35],"111":[26],"112":[25],"113":[76,25],"114":[25,30],"115":[25],"116":[30,25],"117":[76],"118":[30,25],"119":[25],"120":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","MoveBehavior","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","DeviceManager","UnityEngine.Rendering.Universal.Light2D","UnityEngine.AudioSource","LoopGround","PipeSpawner","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","FlyBehavior","GameManager","UnityEngine.UI.Text","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Flappy bugs";

Deserializers.lunaInitializationTime = "03/20/2026 02:54:46";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Flappy-Bird";

Deserializers.lunaAppID = "37659";

Deserializers.projectId = "01ab84a6aeeaa1c4899edf3783d736a5";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.14.2\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1715";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3846";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.UnityTechnologies.com.unity.template.urpblank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "44a57a7a-59b2-46bb-9174-4bca0d55c309";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

