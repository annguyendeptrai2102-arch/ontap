import matplotlib.pyplot as plt

X = [1, 2, 1, 2, 3, 3, 4, 4, 5]
Y = [1, 2, 3, 4, 3, 5, 4, 6, 6]
n = len(X)

mean_x = sum(X) / n
mean_y = sum(Y) / n

print(f"Trung binh X: {mean_x:.2f}")
print(f"Trung binh Y: {mean_y:.2f}")

numer = 0
denom = 0

for i in range(n):
    deviation_x = X[i] - mean_x
    deviation_y = Y[i] - mean_y
    
    numer += deviation_x * deviation_y
    denom += deviation_x ** 2

beta_1 = numer / denom
beta_0 = mean_y - (beta_1 * mean_x)

print(f"Tu so (SSxy): {numer:.2f}")
print(f"Mau so (SSxx): {denom:.2f}")
print(f"Do doc (beta_1): {beta_1:.4f}")
print(f"He so chan (beta_0): {beta_0:.4f}")
print(f"\n=> Phuong trinh: Y = {beta_0:.2f} + {beta_1:.3f} * X")
print("-" * 30)

ss_total = 0
ss_residual = 0
sum_abs_error = 0
Y_pred = []

for i in range(n):
    y_real = Y[i]
    y_p = beta_0 + beta_1 * X[i]
    Y_pred.append(y_p)
    
    error = y_real - y_p
    ss_residual += error ** 2
    sum_abs_error += abs(error)
    ss_total += (y_real - mean_y) ** 2

mse = ss_residual / n
mae = sum_abs_error / n
rmse = mse ** 0.5
r2 = 1 - (ss_residual / ss_total)

k = 1
r2_adjusted = 1 - ((1 - r2) * (n - 1) / (n - k - 1))

print("KET QUA DANH GIA MO HINH:")
print(f"1. MSE:                   {mse:.4f}")
print(f"2. MAE:                   {mae:.4f}")
print(f"3. RMSE:                  {rmse:.4f}")
print(f"4. R-squared:             {r2:.4f}")
print(f"5. Adjusted R-squared:    {r2_adjusted:.4f}")
print("-" * 30)

plt.figure(figsize=(10, 6))

plt.scatter(X, Y, color='blue', label='Du lieu thuc te')

plt.plot(X, Y_pred, color='red', linewidth=2, label='Duong hoi quy')

for i in range(n):
    plt.plot([X[i], X[i]], [Y[i], Y_pred[i]], color='gray', linestyle='--', linewidth=1, alpha=0.5)

plt.title(f'Hoi quy tuyen tinh: Y = {beta_0:.2f} + {beta_1:.3f}X\nR^2 = {r2:.3f}')
plt.xlabel('Truc X')
plt.ylabel('Truc Y')
plt.legend()
plt.grid(True)
plt.show()
