import numpy as np
import matplotlib.pyplot as plt

# =====================
# 1. Dữ liệu
# =====================
x = np.array([1, 2, 1, 2, 3, 3, 4, 4, 5])
y = np.array([1, 2, 3, 4, 3, 5, 4, 6, 5])
m = len(x)

# =====================
# 2. Khởi tạo tham số
# =====================
beta_0 = 0.0
beta_1 = 0.0
alpha = 0.01

print("Lần lặp | beta_0 | beta_1")
print("--------------------------")

# =====================
# 3. Gradient Descent (10 vòng lặp)
# =====================
for i in range(1, 11):
    y_pred = beta_0 + beta_1 * x

    d_beta_0 = (-2/m) * np.sum(y - y_pred)
    d_beta_1 = (-2/m) * np.sum((y - y_pred) * x)

    beta_0 = beta_0 - alpha * d_beta_0
    beta_1 = beta_1 - alpha * d_beta_1

    print(f"{i:7} | {beta_0:.4f} | {beta_1:.4f}")

# =====================
# 4. In phương trình
# =====================
print("\nPhương trình hồi quy sau 10 vòng lặp:")
print(f"y = {beta_0:.4f} + {beta_1:.4f}x")

# =====================
# 5. Vẽ đồ thị
# =====================
plt.scatter(x, y, label="Dữ liệu thực")
plt.plot(x, beta_0 + beta_1 * x, label="Đường hồi quy")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Linear Regression bằng Gradient Descent (10 vòng lặp)")
plt.legend()
plt.grid(True)
plt.show()
