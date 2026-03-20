using UnityEngine;

public class DeviceManager : MonoBehaviour
{
    public Camera cam;
    [Header("Device Multipliers")]
    public float phoneMultiplier = 1.1f;
    public float tallPhoneMultiplier = 1.1f;
    public float tabletMultiplier = 0.9f;

    void Update()
    {
        ApplyCameraSize();
    }

    void ApplyCameraSize()
    {
        float aspect = (float)Screen.height / Screen.width;

        DeviceType device = GetDeviceType(aspect);

        float multiplier = 1f;

        switch (device)
        {
            case DeviceType.Phone:
                multiplier = phoneMultiplier;
                Debug.Log("Device: Phone");
                break;

            case DeviceType.TallPhone:
                multiplier = tallPhoneMultiplier;
                Debug.Log("Device: Tall Phone");
                break;

            case DeviceType.Tablet:
                multiplier = tabletMultiplier;
                Debug.Log("Device: Tablet");
                break;
        }

        cam.orthographicSize = multiplier;
    }

    DeviceType GetDeviceType(float aspect)
    {
        // Common aspect ranges:
        // Tablet ≈ 4:3 → ~1.33
        // Phone ≈ 16:9 → ~1.77
        // Tall Phone ≈ 18:9+ → ~2.0+

        if (aspect < 1.5f)
            return DeviceType.Tablet;

        if (aspect >= 1.5f && aspect < 1.9f)
            return DeviceType.Phone;

        return DeviceType.TallPhone;
    }

    enum DeviceType
    {
        Phone,
        TallPhone,
        Tablet
    }
}